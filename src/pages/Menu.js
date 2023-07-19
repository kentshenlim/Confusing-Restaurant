import Title from '../components/Title';
import Pallet from '../components/Pallet';
import focusBand from '../assets/img/focusBand.png';
import tinyMushroom from '../assets/img/tinyMushroom.png';
import bigMushroom from '../assets/img/bigMushroom.png';
import rareCandy from '../assets/img/rareCandy.png';
import medal1 from '../assets/img/medal1.png';
import medal2 from '../assets/img/medal2.png';
import medal3 from '../assets/img/medal3.png';
import appetizer1 from '../assets/img/appetizer1.png';
import appetizer2 from '../assets/img/appetizer2.png';
import main1 from '../assets/img/main1.png';
import main2 from '../assets/img/main2.png';
import dessert1 from '../assets/img/dessert1.png';
import dessert2 from '../assets/img/dessert2.png';

export default function Home() {
  // Menu wrapper
  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('page', 'menu-wrapper', 'flex-vertical');

  // Title
  const titleNode = Title('Menu');

  // Commitment
  function createComBodyNode(text, imArr) {
    const comWrapper = document.createElement('div');
    const textNode = document.createElement('h3');
    textNode.textContent = text;
    const imContainer = document.createElement('div');
    imContainer.classList.add('flex-horizontal');
    imArr.forEach((imSrc) => {
      const imNode = document.createElement('img');
      imNode.classList.add('img-round-corner');
      imNode.src = imSrc;
      imContainer.appendChild(imNode);
    });
    comWrapper.append(...[textNode, imContainer]);
    return comWrapper;
  }
  const comNode = Pallet(
    'Commitment',
    focusBand,
    'n',
    createComBodyNode(
      'At PokéBités Café, we take great pride in providing our customers with an exceptional dining experience, and it all begins with our unwavering commitment to using only the highest quality ingredients in every dish we prepare. We believe that using the freshest and finest ingredients is the cornerstone of creating delicious and memorable meals that leave a lasting impression on our guests. Our commitment has earned us several prestigious awards.',
      [medal1, medal2, medal3],
    ),
    'commit',
  );

  // Meal selection
  function createMealBodyNode(arrChoices, mealClass) {
    const mealNode = document.createElement('div');
    mealNode.classList.add('meal-selection', mealClass, 'flex-vertical');
    arrChoices.forEach((obj) => {
      const {
        imSrc, mealName, description, price,
      } = obj;
      const choiceWrapper = document.createElement('div');
      choiceWrapper.classList.add('flex-vertical', 'choice-wrapper');
      const imNode = document.createElement('img');
      imNode.src = imSrc;
      const nameNode = document.createElement('h3');
      nameNode.textContent = mealName;
      const desNode = document.createElement('p');
      desNode.textContent = description;
      const priceNode = document.createElement('p');
      priceNode.classList.add('pokemon-dollar');
      priceNode.textContent = price;
      choiceWrapper.append(...[imNode, nameNode, desNode, priceNode]);
      mealNode.appendChild(choiceWrapper);
    });
    return mealNode;
  }

  // Amuse-bouche
  const appeNode = Pallet(
    'Amuse-bouche',
    tinyMushroom,
    'background-isometric',
    createMealBodyNode(
      [
        {
          imSrc: appetizer1,
          mealName: 'Citrus Delight Platter',
          description:
            "A refreshing appetizer that captures the essence of the bountiful Mirage Island. This delectable dish is an ode to the island's unique blend of flavors, combining zesty lemons, delightful candies, and succulent berries.",
          price: 150,
        },
        {
          imSrc: appetizer2,
          mealName: "Pikachu's Pancake Medley",
          description:
            "A whimsical creation inspired by the playful spirit of everyone's favorite Electric-type Pokémon, this dish is a true celebration of flavors and artistry. The pancakes are lovingly paired with a variety of luscious fruits that pay homage to the lush vegetation found on Mirage Island.",
          price: 225,
        },
      ],
      'appetizer',
    ),
    'appetizer',
  );

  // Plat Principal
  const mainNode = Pallet(
    'Plat Principal',
    bigMushroom,
    'background-zigzag',
    createMealBodyNode(
      [
        {
          imSrc: main1,
          mealName: 'Mirage Island Beef Stew',
          description:
            'This soul-warming creation is a tribute to the rich, diverse flavors of the Pokémon world and the heartwarming hospitality found on Mirage Island. At the heart of this savory masterpiece lies tender, succulent beef, slow-cooked to perfection. Complementing the savory notes are an assortment of fresh vegetables, locally sourced from the abundant fields of Mirage Island.',
          price: 650,
        },
        {
          imSrc: main2,
          mealName: 'Enchanted Isle Carbonara',
          description:
            'A fusion of traditional Italian flavors and the enchanting allure of Mirage Island, this pasta delight promises a memorable dining experience like no other. Nestled in a bed of perfectly al dente spaghetti, this dish boasts a luxurious creamy sauce that envelops every strand with velvety goodness. To elevate the experience further, the Pokémon Carbonara Spaghetti is adorned with a sprinkle of crisp and savory bacon bits.',
          price: 550,
        },
      ],
      'main',
    ),
    'main',
  );

  // Dessert
  const dessNode = Pallet(
    'Dessert',
    rareCandy,
    'background-rectangle',
    createMealBodyNode(
      [
        {
          imSrc: dessert1,
          mealName: 'Magical Lantern Fantasy',
          description:
            "Behold a delightful spectacle of a pink-brown chocolate ice cream cookie, skillfully crafted to resemble the enchanting lanterns that illuminate the island's starry nights. Perched atop this dreamy creation is an edible lantern doll, a testament to the culinary artistry that brings this fantasy to life.",
          price: 275,
        },
        {
          imSrc: dessert2,
          mealName: 'Berry Bliss Tiramisu',
          description:
            "This delectable treat artfully combines the rich heritage of Italian Tiramisu with the vibrancy of Mirage Island's ripest strawberries. Each heavenly spoonful unveils layers of creamy mascarpone cheese elegantly intertwined with delicate ladyfinger biscuits, expertly soaked in a symphony of espresso and a hint of amaretto.",
          price: 200,
        },
      ],
      'dessert',
    ),
    'dessert',
  );

  // Append elements
  menuWrapper.append(...[titleNode, comNode, appeNode, mainNode, dessNode]);

  return menuWrapper;
}
