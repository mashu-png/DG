(function(){
    let Location_Text_Element = document.getElementById('Location_Text');
    //let TEL_Text_Element = document.getElementById('TEL_Text');
    let Contents_IMG_Text_Element = document.getElementById('DG_Live');
    //let Riku_Elements = document.getElementById('Riku_Send_Profiles');    

    function Click_Handler_Bodys(){
        Location_Text_Element.addEventListener('click',function(){
            location.href = 'http://www.genky.co.jp/shop/cont.php?cont_no=386&g=4&ar=&page=1';
        });
        Contents_IMG_Text_Element.addEventListener('click',function(){
            location.href = 'https://www.dgdgdg.com/dglive/user_how/';
        });
    }
    Click_Handler_Bodys();
}());