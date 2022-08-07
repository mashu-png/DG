let Ranking_Element = document.getElementById('Ranking');
let date = new Date();
let Month = date.getMonth();
if(Month === 0){
    Ranking_Element.innerHTML ="12月度2位";
}else{
    Ranking_Element.innerHTML = Month + "月度2位";
}

let header_Element = document.getElementById('DG_TOP');
header_Element.addEventListener('click',function(){
    location.href = '../../index.html';
});

let Tweet_btn_Element = document.getElementById('tweet');
Tweet_btn_Element.addEventListener('click',function(){
    location.href = 'https://twitter.com/ore30749492';
});

function FadeItem(){
    $('.Top_fhoto').hide().fadeIn(1000);
    $('.Left_fhoto').hide().fadeIn(1500);
    $('.Right_fhoto').hide().fadeIn(2000);
    $('.Under_fhoto').hide().fadeIn(2500);
}
setTimeout(FadeItem,5000);
