$(function () {
    $('.single-item').slick({
        accessibility: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4500,
        speed: 500
    });
    function IMGSettings(){
         let IMG_Element = document.getElementById("Top_IMG");
         IMG_Element.style.display = "none";
         setTimeout(function(){
             IMG_Element.style.display = "block"
         },2000);
    }
    IMGSettings()
});