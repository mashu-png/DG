(function(){
    class FAQ_Systems {
        constructor(object){
            let FAQ_Element = document.querySelector(object.hookName)
            let Trigger = FAQ_Element.getElementsByTagName(object.tagName);

            let Trigger_len = Trigger.length
            let index = 0;

            while(index < Trigger_len){
                Trigger[index].addEventListener('click',this.Click_Trigger);
                index++;
            }
        }
        Click_Trigger(e){
            e.preventDefault();

            let Target = e.currentTarget;
            let content = Target.nextElementSibling;

            if(content.style.display === 'block'){
                content.style.display = 'none';
            }else{
                content.style.display = 'block';
            }
        }
    }

    const FAQ = new FAQ_Systems({
        hookName:'#FAQ_Main_Text',
        tagName:'a'
    });

    FAQ;

}())