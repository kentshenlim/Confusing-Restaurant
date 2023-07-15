import Title from '../components/Title';
import Pallet from '../components/Pallet';
import timerBall from '../assets/img/timerBall.png';

export default function Home() {
  // Home wrapper
  const homeWrapper = document.createElement('div');
  homeWrapper.classList.add('home-wrapper', 'flex-vertical');

  // Title
  const titleNode = Title('PokéBités Café');

  // Opening hours
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
  const hourNode = Pallet(
    'Hours',
    timerBall,
    'background-zigzag',
    createTime(),
    'hours',
  );

  homeWrapper.appendChild(titleNode);
  homeWrapper.appendChild(hourNode);

  return homeWrapper;
}
