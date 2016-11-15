(function(){
    toggleSideBar();
    fadeDivs();
})();

function toggleSideBar(){

    var $open = $('.open-sidebar'),
        $close = $('.close-sidebar'),
        $sidebar = $('#sidebar'),
        $main = $('#wrapper'),
        $body = $('body'),
        $overlay = $('<div class="overlay"></div>');

    $open.on('click', function(event){
        event.preventDefault();
        $sidebar.css('left', '0%').addClass('js-fade');
        $main.css('margin-left', '0px');
        $overlay.prependTo($main);
    });

    $close.on('click', function(event){
        event.preventDefault();
        $sidebar.css('left', '-100%').removeClass('js-fade');
        $main.css('margin-left', '0px');
        $overlay.remove();
    });

    $('a[href^="/"]').on('click', function(){
        $sidebar.css('left', '-100%').removeClass('js-fade');
        $main.css('margin-left', '0px');
        $overlay.remove();
    });
}

function fadeDivs(){
    $(window).scroll(function(){

        var scrollWidth = $(this).scrollTop();

        if($(window).width() > 756){

            if(scrollWidth > $('#anim-shop').offset().top - ($(window).height() / 1.2)){
                $('#anim-shop .move-right').addClass('js-fadeleft');
                $('#anim-shop .move-left').addClass('js-faderight');
            }


            if(scrollWidth > $('#anim-coffee').offset().top - ($(window).height() / 1.5)){
                $('#anim-coffee .move-right').addClass('js-fadeleft');
                $('#anim-coffee .move-left').addClass('js-faderight');
            }

            if(scrollWidth > $('#anim-avenue').offset().top - ($(window).height() / 2)){
                $('#anim-avenue .move-right').addClass('js-fadeleft');
                $('#anim-avenue .move-left').addClass('js-faderight');
            }

        } else {

            if(scrollWidth > $('#anim-shop').offset().top - $(window).height()){
                $('#anim-shop .move-right').css({'opacity' : 1});
                $('#anim-shop .move-left').css({'opacity' : 1});
            }

            if(scrollWidth > $('#anim-coffee').offset().top - $(window).height()){
                $('#anim-coffee .move-right').css({'opacity' : 1});
                $('#anim-coffee .move-left').css({'opacity' : 1});
            }

            if(scrollWidth > $('#anim-avenue').offset().top - $(window).height()){
                $('#anim-avenue .move-right').css({'opacity' : 1});
                $('#anim-avenue .move-left').css({'opacity' : 1});
            }
        }

    });
  }
