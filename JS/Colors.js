(function (){
    function Backgrounds(){
            $('.main_contents').animate({
                'backgroundColor':'#000000'
            },1000)
            $('.main_contents').animate({
                'color':'#ffffff',
            },1000)
        }

    setTimeout(Backgrounds,2000)

    function rainbow_text(){
        $('.header_Text').animate({
            'color':'#FF0000'
        },1000);
        $('.header_Text').animate({
            'color':'#FFA500'
        },1000);
        $('.header_Text').animate({
            'color':'#FFFF00'
        },1000);
        $('.header_Text').animate({
            'color':'#008000'
        },1000);
        $('.header_Text').animate({
            'color':'#00FFFF'
        },1000);
        $('.header_Text').animate({
            'color':'#0000FF'
        },1000);
        $('.header_Text').animate({
            'color':'#800080'
        },1000);
    rainbow_text();
    }

    setTimeout(rainbow_text,2500);

    function company(){
        $('#company_text').animate({
            'backgroundColor':'#000000',
            'color':'#ffffff',
        },1000);
        $('.Pink_Text').animate({
            'color':'#ff69b4',
        },1000);
    }
    setTimeout(company,2500);
    function Events_Text(){
        $('.Event_Text').animate({
            'backgroundColor':'#000000',
        },1000);
        $('.Event_Text').animate({
            'color':'#ffffff',
        },1500);
        $('.Event_color').animate({
            'color':'red',
        },1500);
    }

    setTimeout(Events_Text,2500);

    function price(){
        $('.Price').animate({
            'backgroundColor':'#000000',
        },1500);
    }

    setTimeout(price,2500)
    function Price_List(){
        $('.Price_List').animate({
            'backgroundColor':'#000000',
        },1500);
    }

    setTimeout(Price_List,2500)

    function locations(){
        $('.Locations').animate({
            'backgroundColor':'#000000',
        },1500);
        setTimeout(function () {
           document.getElementById('Location_Title').style.textDecoration = "underline blue solid"; 
           document.getElementById('Location_Text').style.textDecoration = "underline white solid";
        },500);
    }
    setTimeout(locations,2500);

    function Business(){
        $('.Business_Hours').animate({
            'backgroundColor':'#000000',
        },1500);
        setTimeout(function () {
            document.getElementById('Business_Title').style.textDecoration = "underline blue solid"; 
            document.getElementById('Business_Text').style.textDecoration = "underline white solid";
        },500);
    }

    setTimeout(Business,2500);

    function Holiday(){
        $('.Holiday').animate({
            'backgroundColor':'#000000',
        },1500);
        setTimeout(function () {
            document.getElementById('Holiday_Title').style.textDecoration = "underline blue solid"; 
            document.getElementById('Holiday_Text').style.textDecoration = "underline white solid";
        },500)
    }

    setTimeout(Holiday,2500)

    function TEL(){
        $('.TEL').animate({
            'backgroundColor':'#000000',
        },1500);
        setTimeout(function () {
            document.getElementById('TEL_TItle').style.textDecoration = "underline blue solid"; 
            document.getElementById('TEL_Text').style.textDecoration = "underline white solid";
        },500)

    }

    setTimeout(TEL,2500);

    function Img_container_Text(){
        $('.IMG_Text').animate({
            'color':'#000000',
        },1500);
    }
    
    setTimeout(Img_container_Text,2500);

    function Footer(){
        $('.footer').animate({
            'backgroundColor':'#000000',
        },1500)
    }

    setTimeout(Footer,2500)

    function Contents_Title(){
        $('.Contents_Title').animate({
            'color':'#000000',
        },1500)
    }

    setTimeout(Contents_Title,3000);

    function Cast_Text(){
        $('.Cast_Text').animate({
            'color':'red',
        },1500);
    }

    setTimeout(Cast_Text,2500);

    function Cast_Name_Text(){
        $('.Cast_Name').animate({
            'color':'#000000',
        },1500);
    }
    setTimeout(Cast_Name_Text,2500);

    function FAQ_Text(){
        $('.FAQ_Text').animate({
            'color':'#ff1493',
        },1500);
    }

    setTimeout(FAQ_Text,2500);
    
    function FAQ_Trigger(){
        $('.FAQ_Trigger').animate({
            'backgroundColor':'#333',
        },1500);
    }
    setTimeout(FAQ_Trigger,2500);

    function Contact_Title(){
        $('.Contact_Title').animate({
            'color':'green',
        },1500);
    }

    setTimeout(Contact_Title,2500);

    function Contact_Box(){
        $('.Contact_Box').animate({
            'color': '#000000',
            'backgroundColor':'#d3d3d3',
        },1500);

    }
    setTimeout(Contact_Box,2500);
}())