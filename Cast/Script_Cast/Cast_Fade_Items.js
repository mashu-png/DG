(function(){

    function main(){
        setTimeout(Riku,4000);
        setTimeout(Sho,5000);
    }
    function Riku(){
        $('.Cast').hide().fadeIn(2000);
        $('.Cast_Text_Logo').hide().fadeIn(2000);
        $('.Cast_Name').hide().fadeIn(2000);
    }
    function Sho(){
        $('.Cast1').hide().fadeIn(2500);
        $('.Cast_Text_Logo1').hide().fadeIn(2500);
        $('.Cast_Name1').hide().fadeIn(2500);
    }
    main();
}())
