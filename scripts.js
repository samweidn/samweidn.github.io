
$(function () {

    $('#hamburger-menu').on('click', function () {

        var menu = $('#hamburger-menu');
        var nav = $('#navigation');

        if (menu.hasClass("active")) {
            menu.removeClass("active");
            nav.removeClass("show");

        } else {
            menu.addClass("active");
            nav.addClass("show");
        }
    });

});
