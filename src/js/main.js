// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);
//
// window.addEventListener('resize', () => {
//     // We execute the same script as before
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
//
// });
let documentBody = document.body
    , isMobile = document.documentElement.clientWidth < 768
    , home = null
    , work = null
    , journal = null
    , journalPost = null
    , reveal = null
    , namespace = null;

$(document).ready(function(){

   initPreloader();

});

const initPreloader = () => {

    new Vivus(
        'preloader',
        {
            type: 'scenario',
        },
        function (myVivus) {

            let svg = $(myVivus.el);
            let letter = svg.find('.logo-path');

            letter.css('fill', '#fff');
            letter.css('mask', 'none');

            myVivus.el.classList.add('finished');
            $(".preloader__container").removeClass("-loading");

        }

    );
}

function initPage() {
    // documentBody.classList.contains("home-page") || documentBody.classList.contains("work-page") ? documentBody.classList.remove("-loading") : setTimeout(function () {
    //     documentBody.classList.remove("-loading")
    // }, 3000);
    //initPreloader();

    // for (var t = document.querySelectorAll("[data-script-src]"), l = 0, e = t.length; l < e; l++) {
    //     var i = t[l]
    //         , n = i.getAttribute("data-script-src")
    //         , o = document.createElement("script");
    //     o.src = n,
    //         i.appendChild(o)
    // }
    var r = document.querySelector("body.home-page-js");
    null !== r && (home = new Home(r));

    var a = document.querySelector("body.work-page-js");
    null !== a && (work = new Work(a));
    var u = document.querySelector("body.journal-page-js");
    null !== u && (journal = new Journal(u));
    var d = document.querySelector("body.journal-post-page-js");
    null !== d && (journalPost = new JournalPost(d))
}

function stopPage() {
    if(home !== null){
        home.stopEvents();
        home = null;
    }
}
class Home {

    constructor(e) {

        this.initVars(e);
        this.initEvents();
        this.initHome();
        this.initForm();

    }

    initVars(e) {
        this.documentBody = document.body,
        this.stagePerspective = document.querySelector(".stagePerspective"),
        this.stageContainer = document.querySelector(".stageContainer"),
        this.stage = document.querySelector(".stage"),
        this.projectsLi = document.querySelectorAll(".projects li"),
        this.projectsLiA = document.querySelectorAll(".projects li .projectName"),
        this.isMobile = document.documentElement.clientWidth < 768,
        this.isSafari = !1,
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !this.isMobile && (this.isSafari = !0, this.documentBody.classList.add("safari")),
        this.scrollHeight = 0,
        this.scrollOffset = 0,
        this.scrollPercent = 0,
        this.stagePosition = this.scrollPercent,
        this.modifier = 0,
        this.resizeRef = this.resize.bind(this),
        this.scrollRef = this.scroll.bind(this),
        //this.projectsLiClickRef = this.projectsLiClick.bind(this),
        this.projectsLiMouseOverRef = this.projectsLiMouseOver.bind(this),
        this.projectsLiMouseOutRef = this.projectsLiMouseOut.bind(this),
        this.projectsLiAClickRef = this.projectsLiAClick.bind(this)
    }

    initEvents() {
        var e = this;
        this.isMobile || setTimeout(function () {
            window.addEventListener("resize", e.resizeRef, !1),
                e.stagePerspective.addEventListener("scroll", e.scrollRef, !1)
        }, 3e3),
            this.projectsLi.forEach(function (t) {
                    //t.addEventListener("click", e.projectsLiClickRef, !1),
                    t.addEventListener("mouseover", e.projectsLiMouseOverRef, !1),
                    t.addEventListener("mouseout", e.projectsLiMouseOutRef, !1)
            }),
            this.projectsLiA.forEach(function (t) {
                t.addEventListener("click", e.projectsLiAClickRef, !1)
            })
    }

    stopEvents() {
        var e = this;
        window.removeEventListener("resize", e.resizeRef, !1),
            e.stagePerspective.removeEventListener("scroll", e.scrollRef, !1),
            e.projectsLi.forEach(function (t) {
                //t.removeEventListener("click", e.projectsLiClickRef, !1),
                t.removeEventListener("mouseover", e.projectsLiMouseOverRef, !1),
                t.removeEventListener("mouseout", e.projectsLiMouseOutRef, !1)
            })
            // e.projectsLiA.forEach(function (t) {
            //     t.removeEventListener("click", e.projectsLiAClickRef, !1)
            // })
    }

    initHome() {

        var t = this;
        setTimeout(function () {
            $('body').removeClass("-loading");
            t.documentBody.classList.add("intro");
        }, 3000); //3000


        setTimeout(function () {
            t.stageContainer.style.opacity = 1;
        }, 3400), //3400
        this.isMobile || (this.resize(), this.loop()),
        setTimeout(function () {
            t.documentBody.classList.remove("intro")
        }, 5800); //5800

        this.isMobile && document.querySelectorAll(".perspective-origin-tt-bb").forEach(function (t) {
            basicScroll.create({
                elem: t,
                from: "top-top",
                to: "bottom-bottom",
                direct: !0,
                props: {
                    "perspective-origin-y": {
                        from: "25%",
                        to: "85%"
                    },
                    "--perspective-origin-y": {
                        from: "25%",
                        to: "85%"
                    }
                }
            }).start()
        })
    }

    initForm() {

        $('.c-form__input-field').each(function () {
            // in case the input is already filled..
            if ($.trim($(this).val()) !== '') {
                $(this).parent().addClass('is-full');
            }

            // events:
            $(this).on('focus', function () {
                // console.log($(this));
                $(this).closest('.c-form__input').addClass('is-full');

                //ev.target.parentNode.classList.add('input--filled');
            });

            $(this).on('blur', function () {

                if ($.trim($(this).val()) === '') {
                    $(this).closest('.c-form__input').removeClass('is-full');
                    //ev.target.parentNode.classList.remove('input--filled');
                }
            });

        });


        //Validate

        if ($('.js-validate').length > 0) {

            $('.js-validate').each(function () {
                var block = $('.c-form__input-field');

                $(this).validate({

                    focusInvalid: false,
                    // errorClass: 'c-form__input--error',
                    // validClass: 'c-form__input--valid',
                    highlight: function (element, errorClass, validClass) {
                        $(element).closest('.c-form__input').addClass('c-form__input--error').removeClass('c-form__input--valid');
                    },
                    unhighlight: function (element, errorClass, validClass) {
                        $(element).closest('.c-form__input').removeClass('c-form__input--error').addClass('c-form__input--valid');
                    },

                    rules: {

                        name: {
                            required: true
                        },

                        email: {
                            required: true,
                            email: true
                        },

                        phone: {
                            required: true
                        }
                    },

                    messages: {
                        name: 'Введите корректно Имя',
                        email: 'Введите корректно E-mail',
                        phone: 'Введите корректно Телефон',
                        privacy: ''
                    },
                    submitHandler: function (form) {
                        /*console.log($('.popup__privacy-cb').attr('checked'));

                        if ($('.popup__privacy-cb').attr('checked') == undefined) {
                            return false;
                        }*/


                        $.ajax({
                            type: "POST",
                            dataType: 'json',
                            url: '/local/tools/form-handler.php',
                            data: $(form).serialize(),
                            error: function () {
                                console.log("Error messages");
                            },
                            success: function (data) {
                                if (!data.error) {

                                    $(form).find('input[type="text"]').value = '';
                                    $(form).find('.c-form__error').fadeOut();

                                    $(form).find(".dz-message .dz-remove").click();

                                    $('#pop-result').fadeIn(400);
                                    $('#pop-result').addClass('is-active');

                                    $('input.c-form__input-field').each(function(){
                                        $(this).blur();
                                    });

                                    //$(form).parents('.popup').addClass("is-submitted");
                                    /*if (!!$(form).data("goal"))
                                        yaCounter6697801.reachGoal($(form).data("goal"));*/
                                }
                                else {
                                    $(form).find('.c-form__error').text(data.message);
                                    $(form).find('.c-form__error').fadeIn();
                                }

                            }
                        });
                    }
                });

                $(".mask--phone").mask("+7 (999) 999-99-99");

            });
        }

    }

    resize() {
        this.isSafari || (this.modifier = .075 * this.documentBody.scrollWidth + 158),
            this.scrollHeight = this.stage.offsetHeight - this.modifier,
            this.stageContainer.style.height = this.scrollHeight + "px"
    }

    loop() {
        this.stagePosition = this.lerp(this.stagePosition, this.scrollPercent, .05),
            this.stagePosition = Math.floor(1e4 * this.stagePosition) / 1e4;
        var t = "translate3d( 0, " + this.stagePosition + "px, 0)";
        this.stage.style.mozTransform = t,
        this.stage.style.webkitTransform = t,
        this.stage.style.transform = t,
        this.loopRef = this.loop.bind(this),
        requestAnimationFrame(this.loopRef)
    }

    lerp(t, e, i) {
        return (1 - i) * t + i * e;
    }

    scroll() {
        document.documentElement.clientWidth;
        this.scrollOffset = this.stagePerspective.pageYOffset || this.stagePerspective.scrollTop,
            this.scrollPercent = this.scrollOffset / (this.scrollHeight - this.documentBody.offsetHeight) || 0,
            this.scrollPercent *= -.075 * this.documentBody.scrollWidth - 158
    }

    projectsLiClick(event) {
        event.stopPropagation();
        event.preventDefault();
        let el = event.target,
            links = el.querySelector("a"),
            href = links.getAttribute("href");
        el.classList.add("isSelected");

        Barba.Dispatcher.trigger("linkClicked", links, event);
        Barba.Pjax.goTo(href);
    }

    projectsLiMouseOver(event) {
        var elements = document.querySelectorAll(".isHovered"),
            projects = document.querySelector(".projects");

            elements.forEach(function(el) {
                el.classList.remove("isHovered")
            });

            event.target.classList.add("isHovered");
            projects.classList.add("isHovering");
    }

    projectsLiMouseOut(event) {
        var e = document.querySelectorAll(".isHovered"),
            i = document.querySelector(".projects");

            e.forEach(function(el, e) {
                el.classList.remove("isHovered")
            });

            i.classList.remove("isHovering")
    }

    projectsLiAClick(e) {

        e.stopPropagation();
        e.preventDefault();

        let href = e.target.getAttribute("href");

        e.target.closest(".projectsLi").classList.add("isSelected");

        Barba.Dispatcher.trigger("linkClicked", e.target, e);
        Barba.Pjax.goTo(href);
    }
};


window.addEventListener("load", function(e) {

    var _this = null
        , ui = document.querySelector(".header")
        , uiInfo = document.querySelector(".header .info")

        , mobileNav = document.querySelector(".mobile-nav")
        , navAbout = document.querySelectorAll("button.link")
        , about = document.querySelectorAll(".about")
        , aboutBack = document.querySelectorAll(".about .btn-back")
        , aboutContainer = document.querySelector(".about .container")
        , prevPage = null
        , nextPage = null
        , barbaSelectedLink = null
        , barbaContainer = document.querySelector(".barba-container")
        , colorModeSelection = "default";
        setTimeout(function() {
            documentBody.classList.contains("night-mode") && (colorModeSelection = "night-mode")
        }, 1050),
        namespace = barbaContainer.getAttribute("data-namespace"),
        isMobile && documentBody.classList.add("isMobile"),

        Barba.Dispatcher.on("linkClicked", function (t, e) {
            prevPage = Barba.HistoryManager.currentStatus().namespace,
                nextPage = t.getAttribute("data-barba"),
                barbaSelectedLink = t,
            documentBody.classList.contains("uiHover") && documentBody.classList.remove("uiHover"),
            documentBody.classList.contains("home-page") || documentBody.classList.contains("navTop") || documentBody.classList.add("navTop"),
            "HomeTransition" == nextPage && t.closest(".projectsLi").classList.add("isSelected")
        }),

        // Barba.Dispatcher.on("newPageReady", function() {
        //     window.ga && "localhost" != document.location.hostname && gtag("config", "UA-120921934-1", {
        //         page_path: location.pathname
        //     })
        // }),

    isMobile || (ui.addEventListener("mouseenter", function (t) {
        documentBody.classList.contains("journal-post-page") && ui.classList.contains("bottom") ? documentBody.classList.add("uiHover") : documentBody.classList.contains("journal-post-page") || documentBody.classList.contains("uiHover") || ui.classList.contains("outline") || documentBody.classList.add("uiHover")
    }),
        ui.addEventListener("mouseleave", function (t) {
            documentBody.classList.contains("uiHover") && documentBody.classList.remove("uiHover")
        }));

    mobileNav.addEventListener("click", function(t) {
        t.stopPropagation(),
            t.preventDefault(),
            documentBody.classList.toggle("mobileNavOpen"),
            documentBody.classList.remove("uiHover")
    }),
    navAbout.forEach(nav => {

        nav.addEventListener("click", function (t) {
            t.stopPropagation(),
            t.preventDefault(),
            isMobile && documentBody.classList.remove("mobileNavOpen"),
            aboutContainer.scrollTop = 0,
            documentBody.classList.add("navTop"),
            documentBody.classList.add("aboutShow"),

            about.forEach(function(el) {
                el.classList.remove("isActive")
            });
            navAbout.forEach(el => {
                el.classList.remove("isActive")
            });
            t.target.classList.add('isActive');

            var id = '#' + t.target.getAttribute("data-section");
            document.querySelector(id).classList.add("isActive");

        });
    });

    aboutBack.forEach(ab => {
        ab.addEventListener("click", function (t) {
            t.stopPropagation(),
            t.preventDefault(),
            (documentBody.classList.contains("home-page") || documentBody.classList.contains("work-page") && ui.classList.contains("bottom") || !documentBody.classList.contains("journal-page") && ui.classList.contains("bottom")) && documentBody.classList.remove("navTop"),
            documentBody.classList.remove("aboutShow"),
            about.forEach(ab => {
                ab.classList.remove('isActive');
            });
            navAbout.forEach(na => {
                na.classList.remove("isActive");
            });
            isMobile && documentBody.classList.add("mobileNavOpen")
        });
    });

    isMobile || (document.onkeydown = function (t) {
        t = t || window.event,
        documentBody.classList.contains("aboutShow") && 27 == t.keyCode && ((documentBody.classList.contains("home-page") || documentBody.classList.contains("work-page") && ui.classList.contains("bottom") || !documentBody.classList.contains("journal-page") && ui.classList.contains("bottom")) && documentBody.classList.remove("navTop"),
            documentBody.classList.remove("aboutShow"))
    });

    var FadeOutTransition = Barba.BaseTransition.extend({
            start: function () {
                Promise.all([this.newContainerLoading, this.outro()]).then(this.finish.bind(this))
            },
            outro: function () {
                console.log(outro);
                var e = Barba.Utils.deferred();
                return documentBody.classList.add("-loading"),
                documentBody.classList.contains("aboutShow") && documentBody.classList.remove("aboutShow"),
                documentBody.classList.contains("mobileNavOpen") && documentBody.classList.remove("mobileNavOpen"),
                ui.classList.contains("outline") && ui.classList.remove("outline"),
                ui.classList.contains("bottom") && ui.classList.remove("bottom"),
                    setTimeout(function (t) {
                        e.resolve()
                    }, 1e3),
                    e.promise
            },
            finish: function () {
                window.scrollTo(0, 0),
                    this.done()
            }
        }),

        HomeTransition = Barba.BaseTransition.extend({
            start: function () {
                Promise.all([this.newContainerLoading, this.outro()]).then(this.finish.bind(this))
            },
            outro: function () {
                var e = Barba.Utils.deferred();
                return documentBody.classList.add("overflowHidden"),
                documentBody.classList.contains("aboutShow") && documentBody.classList.remove("aboutShow"),
                documentBody.classList.contains("mobileNavOpen") && documentBody.classList.remove("mobileNavOpen"),
                ui.classList.contains("outline") && ui.classList.remove("outline"),
                ui.classList.contains("bottom") && ui.classList.remove("bottom"),
                setTimeout(function (t) {
                    documentBody.classList.add("outro")
                }, 1000),
                setTimeout(function (t) {
                    "default" == colorModeSelection && documentBody.classList.remove("ultra-mode")
                }, 1500),
                setTimeout(function (t) {
                    documentBody.classList.add("-loading"),
                        documentBody.classList.remove("overflowHidden"),
                        e.resolve()
                }, 2e3),
                e.promise
            },
            finish: function () {
                documentBody.classList.remove("outro");
                window.scrollTo(0, 0);
                this.done();
            }
        });

    Barba.Pjax.getTransition = function () {
        // console.log(nextPage);
        return null != nextPage ? eval(nextPage) : FadeOutTransition
    };

    var Homepage = Barba.BaseView.extend({
        namespace: "home-page",
        onEnter: function () {
            documentBody.classList.add("home-page");
        },
        onEnterCompleted: function () {
            //"default" !== colorModeSelection || documentBody.classList.contains("ultra-mode") || documentBody.classList.add("ultra-mode"),
            documentBody.classList.add("home-page-js"),
            initPage(),
            setTimeout(function () {
                documentBody.classList.contains("navTop") && documentBody.classList.remove("navTop")
            }, 250)
        },
        onLeave: function () {
            stopPage(),
            documentBody.classList.remove("home-page-js")
        },
        onLeaveCompleted: function () {
            documentBody.classList.remove("home-page"),
            documentBody.classList.add("navTop"),
            documentBody.classList.remove("outro"),
            "default" == colorModeSelection && documentBody.classList.remove("ultra-mode")
        }
    });
    Homepage.init();
    Barba.Pjax.start();
});
