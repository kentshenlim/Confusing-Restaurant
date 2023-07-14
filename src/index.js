import Home from './modules/home';
import './style.css';
import Title from './components/Title';
import Pallet from './components/Pallet';

const test = document.createElement('p');
const body = document.querySelector('body');
test.textContent = '123';
body.appendChild(test);
body.append(Title('PokéBités Café'));

function createListItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}

function createTime() {
  const ul = document.createElement('ul');
  ul.appendChild(createListItem('Sunday: 8am - 8pm'));
  ul.appendChild(createListItem('Monday: 8am - 8pm'));
  ul.appendChild(createListItem('Sunday: 8am - 8pm'));
  ul.appendChild(createListItem('Sunday: 8am - 8pm'));
  ul.appendChild(createListItem('Sunday: 8am - 8pm'));
  ul.appendChild(createListItem('Sunday: 8am - 8pm'));
  ul.appendChild(createListItem('Sunday: 8am - 8pm'));
  return ul;
}

body.append(Pallet('Hours', createTime(), 'hours'));
Home();
