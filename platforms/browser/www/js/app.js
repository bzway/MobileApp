// Use the addEventListener() method to associate events with DOM elements.
document.addEventListener("app.Ready", onAppReady, false);
document.addEventListener("deviceready", onAppReady, false);
document.addEventListener("onload", onAppReady, false);
function onAppReady() {
    if (navigator.splashscreen && navigator.splashscreen.hide) {   // Cordova API detected
        navigator.splashscreen.hide();
    }
    alert("app");
}


$(window).on("navigate", function (event, data) {

});

$(document).on("pageinit", "#Home", function (event) {
    var target = $(event.target);
    target.find('.banner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

jQuery(".page").on("pagebeforeshow", function (event) {
    var target = $(event.target);
    var id = target.attr("id");
    var link = target.find("a[href='#" + id + "']");
    link.addClass("ui-btn-active");
});