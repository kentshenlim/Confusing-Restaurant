import Title from '../components/Title';
import Pallet from '../components/Pallet';
import Day from '../components/Day';
import timerBall from '../assets/img/timerBall.png';
import safariBall from '../assets/img/safariBall.png';

export default function Home() {
  // Home wrapper
  const homeWrapper = document.createElement('div');
  homeWrapper.classList.add('home-wrapper', 'flex-vertical');

  // Title
  const titleNode = Title('PokéBités Café');

  // Opening hours
  const hourData = {
    Mon: ['1200', '2100'],
    Tues: ['1200', '2100'],
    Wed: ['1200', '1800'],
    Thur: ['1100', '1930'],
    Fri: ['1200', '2100'],
    Sat: ['0900', '2300'],
  };
  function createTime(timeData) {
    const timeWrapper = document.createElement('div');
    timeWrapper.classList.add('flex-horizontal');
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

  // Location
  function createLocation() {
    const locationWrapper = document.createElement('div');
    locationWrapper.classList.add('flex-vertical');
    const locationText = document.createElement('h3');
    locationText.textContent = 'Mirage Island (near Sky Pillar), Route 130, Hoenn';
    locationWrapper.appendChild(locationText);
    return locationWrapper;
  }
  const locationNode = Pallet(
    'Location',
    safariBall,
    'background-isometric',
    createLocation(),
    'hours',
  );

  // Append elements
  homeWrapper.appendChild(titleNode);
  homeWrapper.appendChild(hourNode);
  homeWrapper.appendChild(locationNode);

  return homeWrapper;
}
