import Title from '../components/Title';
import Pallet from '../components/Pallet';
import Day from '../components/Day';
import Review from '../components/Review';
import guide from '../assets/img/guide.png';
import timerBall from '../assets/img/timerBall.png';
import safariBall from '../assets/img/safariBall.png';
import loveBall from '../assets/img/loveBall.png';
import aboutRestaurant from '../assets/img/aboutRestaurant.png';
import locationRestaurant from '../assets/img/locationRestaurant.png';
import stevenStone from '../assets/img/stevenStone.png';
import mayBirch from '../assets/img/mayBirch.png';

export default function Home() {
  // Home wrapper
  const homeWrapper = document.createElement('div');
  homeWrapper.classList.add('page', 'home-wrapper', 'flex-vertical');

  // About
  function createAboutBodyNode(imgSrc, aboutText) {
    const aboutWrapper = document.createElement('div');
    const imgNode = document.createElement('img');
    imgNode.classList.add('img-round-corner');
    imgNode.src = imgSrc;
    const textNode = document.createElement('h3');
    textNode.textContent = aboutText;
    aboutWrapper.append(...[imgNode, textNode]);
    return aboutWrapper;
  }
  const aboutNode = Pallet(
    'About',
    guide,
    'n',
    createAboutBodyNode(
      aboutRestaurant,
      'At Mirage Island, we invite you to embark on a journey like no other, where the boundaries between fantasy and reality blur, and your senses are awakened to a world of culinary enchantment. Nestled on a mirage island, a hidden oasis seemingly born from the dreams of wanderers, our restaurant is a testament to the magic that can unfold when imagination meets exquisite cuisine.',
    ),
    'about',
  );

  // Title
  const titleNode = Title('PokéBités Café');

  // Hours
  const hourData = {
    Mon: ['1200', '2100'],
    Tues: ['1200', '2100'],
    Wed: ['1200', '1800'],
    Thur: ['1100', '1930'],
    Fri: ['1200', '2100'],
    Sat: ['0900', '2300'],
  };
  function createTimeBodyNode(timeData) {
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
    createTimeBodyNode(hourData),
    'hours',
  );

  // Location
  function createLocationBodyNode(locationText, imgSrc) {
    const locationWrapper = document.createElement('div');
    locationWrapper.classList.add('flex-vertical');
    const textNode = document.createElement('h3');
    textNode.textContent = locationText;
    locationWrapper.appendChild(textNode);
    const imgNode = document.createElement('img');
    imgNode.src = imgSrc;
    imgNode.classList.add('img-round-corner');
    locationWrapper.appendChild(imgNode);
    return locationWrapper;
  }
  const locationNode = Pallet(
    'Location',
    safariBall,
    'background-isometric',
    createLocationBodyNode('Mirage Island (near Sky Pillar), Route 130, Hoenn', locationRestaurant),
    'location',
  );

  // Review
  const reviewData = [
    {
      name: 'Steven Stone, League Champion',
      imgSrc: stevenStone,
      reviewText: "When I first heard about a restaurant located on a mirage island, I couldn't help but be intrigued. Skepticism mixed with curiosity as I set foot on this mystical oasis, unsure of what to expect. But from the moment I stepped inside, my doubts were shattered, and I was transported into a world of culinary delight.",
    },
    {
      name: 'May Birch, Professional Trainer',
      imgSrc: mayBirch,
      reviewText: "While dining at Mirage Island comes with a premium price tag, it is worth every penny. This is not just a restaurant; it is an escape from reality, an immersive journey for your taste buds and soul. Whether you're seeking a romantic dinner under the stars or a unique culinary adventure, Mirage Island delivers beyond expectations.",
    },
  ];
  function createReviewBodyNode(arr) {
    const reviewWrapper = document.createElement('div');
    reviewWrapper.classList.add('flex-vertical');
    arr.forEach((obj) => {
      const { name, imgSrc, reviewText } = obj;
      reviewWrapper.appendChild(Review(name, imgSrc, reviewText));
    });
    return reviewWrapper;
  }
  const reviewNode = Pallet(
    'Review',
    loveBall,
    'background-rectangle',
    createReviewBodyNode(reviewData),
    'review',
  );

  // Append elements
  homeWrapper.append(...[titleNode, aboutNode, hourNode, locationNode, reviewNode]);

  return homeWrapper;
}
