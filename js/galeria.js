$(document).ready(function () {
    
    $(".group1").colorbox({rel: 'group1'});
    $(".group2").colorbox({rel: 'group2', transition: "elastic"});
    $(".group3").colorbox({rel: 'group3', transition: "none", width: "75%", height: "75%"});
    $(".group4").colorbox({rel: 'group4', slideshow: true});

});

window.onload = function () {
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        if (h <= 1020) {
            document.getElementById("footer").className = "ajuste";

        } else if (h >= 1020) {
            document.getElementById("footer").className = "";
        }
};