$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000
});

function init(el){
    document.getElementById(el).style.display = 'none';
}
function Mudarestado(el) {
        var display = document.getElementById(el).style.display;
        if(display == "none")
            document.getElementById(el).style.display = 'block';
        else
            document.getElementById(el).style.display = 'none';
}
