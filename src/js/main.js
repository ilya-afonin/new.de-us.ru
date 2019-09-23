/*// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

});*/

$(document).ready(function () {

    new Vivus(
        'preloader',
        {
            type: 'scenario',
        },
        function (myVivus) {

            // `el` property is the SVG element
            let svg = $(myVivus.el);
            let letter = svg.find('.logo-path');
            //letter.css('transition', '2s cubic-bezier(0.215, 0.61, 0.355, 1) 3s');
            letter.css('mask', 'none');
            letter.css('fill', '#fff');
            letter.css('stroke-width', '0');


            letter.css('fill', '#fff');

            $(".preloader__container").removeClass("-loading").delay(1000).queue(function (e) {

                if ($(".page").length) {
                    let contentHeight = $('.page').height();
                    //initScroller();
                }

                $('body').removeClass("-loading").addClass("-loaded");
                setTimeout(function () {
                    $('body').removeClass("-loaded")
                }, 1000);
                e()

            })


            // $(".preloader-line").css("width", $(".preloader-line").width()).removeClass("-loading").delay(0).queue(function (e) {
            //     $(this).css("width", "100vw");
            //
            //     e();
            // })
            //
            //
            // $('body').removeClass("-loading").addClass("-loaded");
            //
            // setTimeout(function () {
            //     $('body').removeClass("-loaded")
            // }, 500);

            //myVivus.el.setAttribute('height', 'auto');

        }
    )






});


