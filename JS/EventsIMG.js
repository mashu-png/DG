(function(){
    function fadeIMG(){
        $('.Event_images').hide().fadeIn(2000);
        $('.DG_Live').hide().fadeIn(2000);
        $('.riku').hide().fadeIn(2000);
        $('.Riku_Text_Logo').hide().fadeIn(2000);
    }
    setTimeout(fadeIMG,2500);

    function FadeItems(){
        $('.Name_Text_Box').hide().fadeIn(2000);
        $('.TEL_Text_Box').hide().fadeIn(2000);
        $('.Message_Text_Box').hide().fadeIn(2000);
        $('.ValueButton').hide().fadeIn(2000);
    }

    setTimeout(FadeItems,2500);
}())