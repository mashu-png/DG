(function(){
    let Name_Element = document.getElementById('Name_Text_Semd_Box');
    let TEL_Element = document.getElementById('TEL_Text_Semd_Box');
    let Message_Element = document.getElementById('Message_Text');
    let Button_Element = document.getElementById('Value_Send_Button');

    function getElement(){
        let GetName = Name_Element.value;
        let GetTEL = TEL_Element.value;
        let GetMessage = Message_Element.value;

        const Message_text = '以下の内容を送信しました\n' + '氏名:' + GetName + '\n' + '電話番号:' + GetTEL + '\n' + 'メッセージ:' + GetMessage;
        alert(Message_text);

        location.reload();
    }

    Button_Element.addEventListener('click',getElement);
}());