import Title from '../components/Title';
import Pallet from '../components/Pallet';
import Day from '../components/Day';
import timerBall from '../assets/img/timerBall.png';

export default function Home() {
  // Home wrapper
  const homeWrapper = document.createElement('div');
  homeWrapper.classList.add('home-wrapper', 'flex-vertical');

  // Title
  const titleNode = Title('PokéBités Café');

  // Opening hours
  const hourData = {
    Mon: ['0900', '1700'],
    Tues: ['0900', '1700'],
    Wed: ['0900', '1700'],
    Thur: ['0900', '1700'],
    Fri: ['0900', '1700'],
  };
  function createTime(timeData) {
    const timeWrapper = document.createElement('div');
    const days = Object.keys(timeData);
    for (let i = 0; i < days.length; i += 1) {
      const [s, e] = hourData[days[i]];
      timeWrapper.appendChild(Day(days[i], s, e));
    }
    return timeWrapper;
  }
  const hourNode = Pallet(
    'Opening Hours',
    timerBall,
    'background-zigzag',
    createTime(hourData),
    'hours',
  );

  // Append elements
  homeWrapper.appendChild(titleNode);
  homeWrapper.appendChild(hourNode);

  return homeWrapper;
}
