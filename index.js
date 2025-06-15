const Input_field = document.getElementById('Input-field');
const Add_button = document.getElementById('Add-button');
Add_button.addEventListener('click',() => {
    const Element= document.createElement('li');
    const List = document.getElementById('Unordered-list');
    const Delete_button= document.createElement('button');
    const Text = Input_field.value;
    Delete_button.innerText= "X";
    Element.innerText=Text;
    Element.appendChild(Delete_button);
    Input_field.value="";
    List.appendChild(Element);
    Delete_button.addEventListener('click',()=>{
        Element.remove();
    })
    
})

