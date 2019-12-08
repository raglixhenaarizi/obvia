var myToggle = new FormField({
    id: 'formFieldEx2',
    label: 'Example  Input',
    placeholder: 'Example  Input',
    name: 'formFieldEx2',
    size: FormFieldSize.SMALL,
    component: {
        ctor: Toggle,
        props: {
            id: 'checkbox',
            value: 1,
            checked: true,
            change: changeTest,
            classes:{
                "checkBox":[ToggleBgStyle.BG_INFO],
                "span":["round"]
            }
        }
    }
});
function changeTest(){
    console.log("Toggle ChangeTest");
}
myToggle.renderPromise().then(function($el){
    $('#root').append($el);
});
