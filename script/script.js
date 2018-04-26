$(document).ready(function () {
    $('.menu-button>li>a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
      console.log('click');
        let target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    let scrollPos = $(document).scrollTop();
    $('.menu-button>li>a').each(function () {
        let currLink = $(this);
        let refElement = $(currLink.attr("href"));

    });
}
