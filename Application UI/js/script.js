(function ($, d) {

    $(".navbar-lines").click(function (e) {
        $(".nav").css("width", "200px");
        $(this).unbind(e);
    });
    $('html').click(function (e) {
        if (e.target.querySelector == '.nav' || e.target.querySelector == '.navbar-lines') {
            console.log("kuch to hua");
        } else {
            console.log("ho gaya");
        }
    });
})(jQuery, document);