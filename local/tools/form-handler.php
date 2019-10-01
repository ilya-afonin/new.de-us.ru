<?
define("NO_KEEP_STATISTIC", true);
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
/*use Redsign\TelegramBot\Telegram;*/

function feedback() {

  if (check_bitrix_sessid()) {
    if (!preg_match("~^([a-z0-9_\-\.])+@([a-z0-9_\-\.])+\.([a-z0-9])+$~i", $_REQUEST["email"]) && $_REQUEST["email"] != "") {
      $EXIT["error"] = true;
      $EXIT["message"] = "Неверный email";
      echo json_encode($EXIT);
      die();
    }

    $EXIT["error"] = false;
    CModule::IncludeModule("iblock");

    $target2 = array();
    if (isset($_REQUEST["uploaded_files"]) && !empty($_REQUEST["uploaded_files"])) {
      $i = 0;

      $tar = explode("|", $_REQUEST["uploaded_files"]);
      foreach ($tar as $n) {
        if ($n == "") {
          continue;
        }

        $info = pathinfo($n);
        $ext = $info['extension']; // get the extension of the file
        $newname = md5($n . $_SESSION["KEY"]) . "." . $ext;
        $target2[] = '/upload/mails/' . $newname;
        $i++;
      }
    }



    /* Телеграм бот


    CModule::IncludeModule('redsign.telegrambot');


    $telegram = Telegram::getInstance();
    $data['text'] = "-------------------------------\nНовая заявка с сайта!     \n-------------------------------\nИмя: ".$_REQUEST["name"]."\nТелефон: ".$_REQUEST["phone"]."\nПочта: ".$_REQUEST["email"]."\nБюджет: ".$BUDGET."\nХочу: ".$PROJECT_TYPE."\nКомментарий: ".$_REQUEST["comment"];
    $arData = array(
            array('id'=>'12345675'), //id пользователя кому отправлять
    );
    $telegram->sendAll($arData,$data);*/

    $name = "Новая заявка от - ".date('d.m.Y H:i');
    $subject = "Добавлена новая заявка от ".date('d.m.Y H:i');

    $arFiles = array();
    foreach($target2 as $file) {
      $arFiles[] = CFile::MakeFileArray($file);
    }

    $prop = array();

    $prop[1] = $_REQUEST["name"];
    $prop[3] = $_REQUEST["email"];
    $prop[2] = $_REQUEST["phone"];
    $prop[4] = $_REQUEST["message"];
    $prop[5] = $arFiles;


    $arStory = Array(
        "IBLOCK_ID" => 6,
        "PROPERTY_VALUES" => $prop,
        "NAME" => $name,
        "DATE_ACTIVE_FROM"=>ConvertTimeStamp(time(), "FULL"),
        "ACTIVE" => "Y",
    );

    $el = new CIBlockElement;

    if ($elID = $el->Add($arStory)) {

      $arFields = Array(
          "AUTHOR" => $_REQUEST["name"],
          "AUTHOR_EMAIL" => $_REQUEST["email"],
          "TEXT" => $_REQUEST["message"],
          "TEL" => $_REQUEST["phone"],
          "SUBJECT" => $subject,
      );

      if (!CEvent::Send("FEEDBACK_FORM", SITE_ID, $arFields, "N", 7, $target2)){
        $EXIT['error'] = true;
      }
      else
        $EXIT["message"] = "Ваше сообщение успешно отправлено!";
    } else {
      $EXIT['error'] = true;
    }

  }
  echo json_encode($EXIT);
}

switch ($_REQUEST["action"]) {
  case "feedback":
    feedback();
    break;
}