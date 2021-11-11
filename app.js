const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listElUL = document.querySelector('ul');
function addGoal (){
    const enteredValue = inputEl.value;
    const listItemEl=document.createElement('li');
listItemEl.textContent = enteredValue;
listElUL.appendChild(listItemEl)
}

buttonEl.addEventListener('click', addGoal);