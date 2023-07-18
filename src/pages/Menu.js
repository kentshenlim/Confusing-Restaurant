import Title from '../components/Title';
import Pallet from '../components/Pallet';
import focusBand from '../assets/img/focusBand.png';
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
      'At PokéBités Café, we take great pride in providing our customers with an exceptional dining experience, and it all begins with our unwavering commitment to using only the highest quality ingredients in every dish we prepare. We believe that using the freshest and finest ingredients is the cornerstone of creating delicious and memorable meals that leave a lasting impression on our guests.',
      [medal1, medal2, medal3],
    ),
    'commit',
  );

  // Meal selection
  function createMealBodyNode(arrChoices, mealClass) {
    const mealNode = document.createElement('div');
    mealNode.classList.add('meal-selection', mealClass);
    arrChoices.forEach((obj) => {
      const {
        imSrc, mealName, description, price,
      } = obj;
      const choiceWrapper = document.createElement('div');
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

  // Append elements
  menuWrapper.append(...[titleNode, comNode]);

  return menuWrapper;
}
