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

    $open.on('click', function(){
        $sidebar.css('left', '0%').addClass('js-fade');
        $main.css('margin-left', '0px');
        $overlay.prependTo($main);
    });

    $close.on('click', function(){
        $sidebar.css('left', '-100%').removeClass('js-fade');
        $main.css('margin-left', '0px');
        $overlay.remove();
    });

    $('a[href^="#"]').on('click', function(){
        $sidebar.css('left', '-100%').removeClass('js-fade');
        $main.css('margin-left', '0px');
        $overlay.remove();
    });

}

function fadeDivs(){
    $(window).scroll(function(){

        var scrollWidth = $(this).scrollTop();

        if($(window).width() > 756){

            if(scrollWidth > $('#shop').offset().top - ($(window).height() / 1.2)){
                $('#shop .move-right').addClass('js-fadeleft');
                $('#shop .move-left').addClass('js-faderight');
            }


            if(scrollWidth > $('#coffee').offset().top - ($(window).height() / 1.8)){
                $('#coffee .move-right').addClass('js-fadeleft');
                $('#coffee .move-left').addClass('js-faderight');
            }

            if(scrollWidth > $('#shop .address-3').offset().top - ($(window).height() / 2.4)){
                $('#shop .address-3 .move-right').addClass('js-fadeleft');
                $('#shop .address-3 .move-left').addClass('js-faderight');
            }

        } else {

            if(scrollWidth > $('#shop').offset().top - $(window).height()){
                $('.bg.shop').css({
                    'background-position' : 'center' + (scrollWidth - $('#shop').offset().top)  + 'px',
                    'background-attachment' : 'scroll'
                });
            }

            if(scrollWidth > $('#coffee').offset().top - $(window).height()){
                $('.bg.coffee').css({
                    'background-position' : 'center' + (scrollWidth - $('#coffee').offset().top)  + 'px',
                    'background-attachment' : 'scroll'
                });
            }
        }

    });
}
