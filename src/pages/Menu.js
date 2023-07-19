import Title from '../components/Title';
import Pallet from '../components/Pallet';
import focusBand from '../assets/img/focusBand.png';
import tinyMushroom from '../assets/img/tinyMushroom.png';
import appetizer1 from '../assets/img/appetizer1.png';
import appetizer2 from '../assets/img/appetizer2.png';
import medal1 from '../assets/img/medal1.png';
import medal2 from '../assets/img/medal2.png';
import medal3 from '../assets/img/medal3.png';

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
          price: ' ₽ 150',
        },
        {
          imSrc: appetizer2,
          mealName: 'Test1',
          description: 'Haha',
          price: 100,
        },
      ],
      'appetizer',
    ),
    'appetizer',
  );

  // Plat Principal
  const mainNode = Pallet(
    'Plat Principal',
    tinyMushroom,
    'background-isometric',
    createMealBodyNode(
      [
        {
          imSrc: appetizer1,
          mealName: 'Citrus Delight Platter',
          description:
             "A refreshing appetizer that captures the essence of the bountiful Mirage Island. This delectable dish is an ode to the island's unique blend of flavors, combining zesty lemons, delightful candies, and succulent berries.",
          price: ' ₽ 150',
        },
        {
          imSrc: appetizer2,
          mealName: 'Test1',
          description: 'Haha',
          price: 100,
        },
      ],
      'main',
    ),
    'main',
  );

  // Dessert
  const dessNode = Pallet(
    'Plat Principal',
    tinyMushroom,
    'background-isometric',
    createMealBodyNode(
      [
        {
          imSrc: appetizer1,
          mealName: 'Citrus Delight Platter',
          description:
              "A refreshing appetizer that captures the essence of the bountiful Mirage Island. This delectable dish is an ode to the island's unique blend of flavors, combining zesty lemons, delightful candies, and succulent berries.",
          price: ' ₽ 150',
        },
        {
          imSrc: appetizer2,
          mealName: 'Test1',
          description: 'Haha',
          price: 100,
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
