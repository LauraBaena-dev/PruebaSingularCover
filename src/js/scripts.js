$(document).ready(function(){

    var gallery = window.matchMedia("(min-width: 1024px)");
    var slider = $('.col-list');
    var sliderInit;

    sliderInit = $('.col-list').html();

    setTimeout(function() {
        setWidthGallery();
    }, 100);

    $(window).resize(function() {
        setTimeout(function() {
            setWidthGallery();
        }, 100)
    });

    function setWidthGallery() {
        slider.empty();
        slider.append(sliderInit);
        slider.css('width', 'max-content');
        if (gallery.matches) {
            slider.append(sliderInit);
            var w = slider.width();
            slider.css('width', w+14);
        }else{
            slider.css('width', '100%');
        }
    }
    
});