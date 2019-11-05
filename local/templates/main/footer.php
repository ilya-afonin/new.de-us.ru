<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

use Bitrix\Main\Localization\Loc;

$assets = \Bitrix\Main\Page\Asset::getInstance();
Loc::loadMessages(__FILE__);
?>
</div>

<?
  $isFixed = (defined('PAGE') && (PAGE == 'home' || PAGE == 'case')) ? ' footer--fixed' : '';
  $isMain = (defined('PAGE') && PAGE == 'home') ? ' footer--main' : '';
?>

<footer class="footer<?=$isFixed.$isMain.' '.$APPLICATION->GetPageProperty('footerWhite')?>">
    <div class="container">
        <div class="footer__inner">
            <? if (defined('PAGE') && PAGE == 'home'): ?>
              <div class="footer__projects">
                  <a class="footer__projects-link scroll link" href="#works">
                      <?= Loc::getMessage('SHOW_PROJECTS'); ?>
                      <span class="footer__projects-anim"></span>
                  </a>
              </div>
            <? endif ?>
            <div class="footer__copyright">
                <? $APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . "/include_areas/" . LANGUAGE_ID . "/copyright.php", Array(), Array("MODE" => "html")); ?>
            </div>

            <div class="welcome__right-block footer__right-block">
                <? $APPLICATION->IncludeComponent(
                    "bitrix:menu",
                    "soc_bottom",
                    array(
                        "ROOT_MENU_TYPE" => "soc",
                        "MENU_CACHE_TYPE" => "Y",
                        "MENU_CACHE_TIME" => "3601",
                        "MENU_CACHE_USE_GROUPS" => "N",
                        "MENU_CACHE_GET_VARS" => array(),
                        "MAX_LEVEL" => "1",
                        "CHILD_MENU_TYPE" => "",
                        "USE_EXT" => "N",
                        "DELAY" => "N",
                        "ALLOW_MULTI_SELECT" => "N",
                        "COMPONENT_TEMPLATE" => "soc_bottom"
                    ),
                    false
                );
                ?>
                <a class="footer__download link" target="_blank" href="<?= \COption::GetOptionString("askaron.settings", "UF_PRESENTATION"); ?>">
                    <?= Loc::getMessage('PRESENTATION'); ?>
                </a>
            </div>
        </div>
    </div>
</footer>
</div>

<? $APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . "/include_areas/" . LANGUAGE_ID . "/popups.php", Array(), Array("MODE" => "html")); ?>

<? if ((!isset($_SERVER['HTTP_USER_AGENT']) || stripos($_SERVER['HTTP_USER_AGENT'], 'Speed Insights') === false) || !$USER->IsAdmin()):
    $APPLICATION->IncludeFile(SITE_TEMPLATE_PATH . "/include_areas/yandex_metrika.php", Array(), Array("MODE" => "html"));
endif; ?>

<?
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/jquery-3.1.1.min.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/mobile-detect.min.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/iphone-inline-video.min.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/jquery.splitlines.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/jquery.mCustomScrollbar.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/smooth-scroll.min.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/smooth-scrollbar.min.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/ScrollMagic.min.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/jquery.ScrollMagic.min.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/validate.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/mask.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/youtube.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/owl.carousel.min.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/swiper.min.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/dropzone.min.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/lib/jquery.countimator.min.js');
$assets->addJs(SITE_TEMPLATE_PATH . '/tpl/dist/assets/js/main.js');
?>
</body>
</html>
