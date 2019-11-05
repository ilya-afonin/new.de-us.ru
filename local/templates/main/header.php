<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
use Bitrix\Main\Localization\Loc;
$assets = \Bitrix\Main\Page\Asset::getInstance();
Loc::loadMessages(__FILE__);
?>
<!DOCTYPE html>
<html lang="<?=LANGUAGE_ID;?>">
<head>
    <title><?$APPLICATION->ShowTitle(false);?></title>
    <meta charset="<?=LANG_CHARSET;?>">
    <?php $APPLICATION->ShowMeta("keywords"); ?>
    <?php $APPLICATION->ShowMeta("description"); ?>
    <?php $APPLICATION->ShowMeta("robots"); ?>
    <meta http-equiv="X-UA-Compatible&quot;,content=&quot;IE=edge">
    <?if(defined('PAGE') && PAGE == 'case'):?>
    <meta name="viewport" content="width=1024">
    <?else:?>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?endif?>
    <link rel="shortcut icon" href="/favicon.ico">
    <?
//    $assets->addCss(SITE_TEMPLATE_PATH . "/tpl/dist/assets/css/lib/animate.css");
//    $assets->addCss(SITE_TEMPLATE_PATH . "/tpl/dist/assets/css/lib/fancybox.css");
//    $assets->addCss(SITE_TEMPLATE_PATH . "/tpl/dist/assets/css/lib/lightbox.css");
//    $assets->addCss(SITE_TEMPLATE_PATH . "/tpl/dist/assets/css/lib/mcustomscrollbar.css");
//    $assets->addCss(SITE_TEMPLATE_PATH . "/tpl/dist/assets/css/lib/owl.carousel.css");
//    $assets->addCss(SITE_TEMPLATE_PATH . "/tpl/dist/assets/css/lib/youtube.css");
//    $assets->addCss(SITE_TEMPLATE_PATH . "/tpl/dist/assets/css/lib/dropzone.css");
//    $assets->addCss(SITE_TEMPLATE_PATH . "/tpl/dist/assets/css/lib/odometer-theme-default.css");
//    $assets->addCss(SITE_TEMPLATE_PATH . "/tpl/dist/assets/css/lib/swiper.min.css");
//    $assets->addCss(SITE_TEMPLATE_PATH . "/tpl/dist/assets/css/main.css");
//    $assets->addCss(SITE_TEMPLATE_PATH . "/tpl/dist/assets/css/media.css");

    $APPLICATION->ShowCSS();
    $APPLICATION->ShowHeadStrings();
    ?>
    <?
        $is_white = ((defined('PAGE') && PAGE != 'case') || $APPLICATION->GetPageProperty("isWhite") == 'Y')?' is-white':'';
        //разукрашиваем хедер в кейсах

    ?>

</head>


<body class="-loading -hide-footer -page-<?= PAGE ?> <?=$APPLICATION->ShowProperty("portfolioBlack")?>">
<div id="panel"><?$APPLICATION->ShowPanel();?></div>
<div class="page">
  <header class="header">
    <div class="container">
      <div class="header__row">
        <div class="header__logo">
          <a class="link animated-logo" href="/"><span class="animated-word">d</span><span class="animated-word">e</span><span class="animated-word">u</span><span class="animated-word">s</span></a>
        </div>
        <div class="header__links <?=$APPLICATION->ShowProperty("menuWhite")?>">
          <?$APPLICATION->IncludeComponent(
              "bitrix:menu",
              "top",
              array(
                  "ROOT_MENU_TYPE" => "top",
                  "MENU_CACHE_TYPE" => "Y",
                  "MENU_CACHE_TIME" => "3600",
                  "MENU_CACHE_USE_GROUPS" => "N",
                  "MENU_CACHE_GET_VARS" => array(
                  ),
                  "MAX_LEVEL" => "1",
                  "CHILD_MENU_TYPE" => "",
                  "USE_EXT" => "N",
                  "DELAY" => "N",
                  "ALLOW_MULTI_SELECT" => "N",
                  "COMPONENT_TEMPLATE" => "top"
              ),
              false
          );
          ?>

          <?$phone = \COption::GetOptionString("askaron.settings", "UF_PHONE");
            $phone_tel = preg_replace('/[^0-9]/', '', $phone);
          ?>

          <div class="header__phone header__button">
              <?if($APPLICATION->GetCurPage() === '/'):?>
              <a class="link header__nav-link" href="tel:+<?=$phone_tel?>"><?=$phone?></a>
                <?else:?>
              <a class="link header__nav-link" href="/about/#s-callback">Сделать заказ</a>
              <?endif;?>
          </div>

          <?$APPLICATION->IncludeComponent(
              "bitrix:menu",
              "soc",
              array(
                  "ROOT_MENU_TYPE" => "soc",
                  "MENU_CACHE_TYPE" => "Y",
                  "MENU_CACHE_TIME" => "3600",
                  "MENU_CACHE_USE_GROUPS" => "N",
                  "MENU_CACHE_GET_VARS" => array(
                  ),
                  "MAX_LEVEL" => "1",
                  "CHILD_MENU_TYPE" => "",
                  "USE_EXT" => "N",
                  "DELAY" => "N",
                  "ALLOW_MULTI_SELECT" => "N",
                  "COMPONENT_TEMPLATE" => "soc"
              ),
              false
          );
          ?>
          <a class="header__download" target="_blank" href="<?=\COption::GetOptionString( "askaron.settings", "UF_PRESENTATION");?>">
            <?=Loc::getMessage('PRESENTATION');?>
          </a>
          <div class="header__copyright">
            <?=Loc::getMessage('COPYRIGHT');?>
          </div>
        </div>
        <div class="header__burger">
          <div class="header__burger-line"></div>
          <div class="header__burger-line"></div>
          <div class="header__burger-line"></div>
        </div>
      </div>
    </div>
  </header>
  <div class="preloader">
    <div class="preloader__container">
      <div class="preloader__line preloader-line -loading"></div>
    </div>
  </div>
  <div class="content<?=(defined('PAGE') && PAGE == 'case')?' content--case':'';?>">

