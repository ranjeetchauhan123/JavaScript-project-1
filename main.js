let input = document.querySelector('.input');
let btn = document.querySelector('.button');
let ul = document.querySelector('ul');

btn.addEventListener('click', function(){
    let list = document.createElement('li');
    list.setAttribute('class','list');
    list.innerText = (input.value);
    ul.appendChild(list);
    input.value="";

let delbtn = document.createElement('button');
    delbtn.innerText=('delete');
    list.appendChild(delbtn);
    delbtn.addEventListener('click',function(){
        list.remove(list);
    });
    list.style.padding=('5px');
    delbtn.style.margin=('0 15px');
    delbtn.style.width=('100px');
    delbtn.style.height=('22px');
    delbtn.style.backgroundColor=('rgb(43, 168, 226)');
    delbtn.style.color=('white');
    delbtn.style.fontSize=('18px');
    delbtn.style.height=('26px');
    delbtn.style.borderRadius=('5px');
});