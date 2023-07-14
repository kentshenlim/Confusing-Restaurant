import Home from './modules/home';
import './style.css';
import Title from './components/Title';

const test = document.createElement('p');
const body = document.querySelector('body');
test.textContent = '123';
body.appendChild(test);
body.append(Title('PokéBités Café'));
Home();
