const itemForm=document.getElementById("item-form");
const itemInput=document.getElementById("item-input");
const itemList=document.getElementById("item-list");


function additem(e)
{
    e.preventDefault();

    const newitem = itemInput["value"];/// itemInput.value
    
    if(newitem==='')
    {
        alert('please add an item')
        return;
        console.log(newitem);

    }


    // create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newitem));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    
    itemList.appendChild(li);
   //itemInput.value='';
  
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className=classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className=classes;
    return icon;
}


itemForm.addEventListener('submit',additem);