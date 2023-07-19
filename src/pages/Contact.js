import Title from '../components/Title';
import Pallet from '../components/Pallet';
import amuletCoin from '../assets/img/amuletCoin.png';
import twistedSpoon from '../assets/img/twistedSpoon.png';
import expertBelt from '../assets/img/expertBelt.png';
import brendanBirch from '../assets/img/brendanBirch.png';
import flannery from '../assets/img/flannery.png';
import machoke from '../assets/img/machoke.png';

export default function Contact() {
  // Contact wrapper
  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add('page', 'contact-wrapper', 'flex-vertical');

  // Title
  const titleNode = Title('Contact');

  // Contact body node creator
  function createContactBodyNode(name, about, pokeNav, imgSrc) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('worker-pallet', 'flex-horizontal');
    const imNode = document.createElement('img');
    imNode.classList.add('img-round-corner');
    imNode.src = imgSrc;
    const infoNode = document.createElement('div');
    infoNode.classList.add('worker-pallet-info', 'flex-vertical');
    const nameNode = document.createElement('h3');
    nameNode.textContent = name;
    const aboutNode = document.createElement('p');
    aboutNode.textContent = about;
    const pokeNode = document.createElement('address');
    pokeNode.textContent = pokeNav;
    infoNode.append(...[nameNode, aboutNode, pokeNode]);
    wrapper.append(...[imNode, infoNode]);
    return wrapper;
  }

  // Restaurant owner
  const ownerNode = Pallet(
    'Restaurateur',
    amuletCoin,
    'background-rectangle',
    createContactBodyNode(
      'Brendan Birch',
      'Meet me, a former Pokémon Champion turned restaurateur on Mirage Island. Discover the enchanting fusion of Pokémon wonder and gastronomic delights in our extraordinary restaurant, where victory and passion create culinary magic.',
      '#87131',
      brendanBirch,
    ),
    'owner',
  );

  // Chef
  const chefNode = Pallet(
    'Chef',
    twistedSpoon,
    'background-isometric',
    createContactBodyNode(
      'Flannery',
      "Embrace the Flame with Your Culinary Sorceress - A former Fire Gym Leader, conjuring perfect dishes with the fiery passion of my Pokémon companions. Let's ignite your senses on a magical gastronomic journey like no other.",
      '#82955',
      flannery,
    ),
    'chef',
  );

  // Waiter
  const waiterNode = Pallet(
    'Waiter',
    expertBelt,
    'background-zigzag',
    createContactBodyNode(
      "Brendan's Machoke",
      'With its immense strength and attentive spirit, Machoke serves you with unparalleled grace. Prepare to be delighted as Machoke adds a touch of Pokémon magic to your dining experience, ensuring each moment is a taste of culinary enchantment.',
      'NA',
      machoke,
    ),
    'waiter',
  );

  // Append elements
  contactWrapper.append(...[titleNode, ownerNode, chefNode, waiterNode]);

  return contactWrapper;
}
