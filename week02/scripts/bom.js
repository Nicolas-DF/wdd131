

const input = document.querySelector('#favchap');
const button = document.querySelecton('button');
const list = document.querySelector('________');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent= input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);

list.append(li);