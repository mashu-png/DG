let Ranking_Element = document.getElementById('Ranking');
let date = new Date();
let Month = date.getMonth()+1;
Ranking_Element.innerHTML =Month + "月度1位";

let header_Element = document.getElementById('DG_TOP');
header_Element.addEventListener('click',function(){
    location.href = '../../index.html';
});

let Tweet_btn_Element = document.getElementById('tweet');
Tweet_btn_Element.addEventListener('click',function(){
    location.href = 'https://twitter.com/ore30749492';
});