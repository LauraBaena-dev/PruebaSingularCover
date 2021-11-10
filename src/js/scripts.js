$(document).ready(function(){
    var gallery = window.matchMedia("(min-width: 1024px)");
    var slider = $('.col-list');
    slider.append(slider.html());
    setTimeout(function() {
        setWidthGallery()
    }, 500);
    $(window).resize(function() {
        setTimeout(function() {
            setWidthGallery()
        }, 500)
    });
    function setWidthGallery() {
        slider.css('width', 'max-content');
        var w = slider.width();
        if (gallery.matches) {
            slider.css('width', w+18)
        }else{

        }
    }
});