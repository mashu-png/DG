(function(){

    function main(){
        setTimeout(Riku,2500);
        setTimeout(Sho,4500);
    }
    function Riku(){
        $('.Cast').hide().fadeIn(1000);
        $('.Cast_Text_Logo').hide().fadeIn(1000);
        $('.Cast_Name').hide().fadeIn(1000);
    }
    function Sho(){
        $('.Cast1').hide().fadeIn(1500);
        $('.Cast_Text_Logo1').hide().fadeIn(1500);
        $('.Cast_Name1').hide().fadeIn(1500);
    }
    main();
}())