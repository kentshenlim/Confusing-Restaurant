import pokeball from '../assets/img/pokeball.png';

export default (() => {
  function createBallNode() {
    const ball = document.createElement('img');
    ball.src = pokeball;
    return ball;
  }

  function createTitle(titleText) {
    // Main element
    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('title-wrapper', 'flex-horizontal');

    // Text element
    const text = document.createElement('h1');
    const anchor = document.createElement('a');
    anchor.textContent = titleText;
    anchor.href = 'https://www.pokemoncenter-online.com/cafe/en/';
    anchor.setAttribute('target', '_blank');
    text.appendChild(anchor);

    // Two pokeballs
    const ballOne = createBallNode();
    const ballTwo = createBallNode();

    // Append
    titleWrapper.appendChild(ballOne);
    titleWrapper.appendChild(text);
    titleWrapper.appendChild(ballTwo);

    return titleWrapper;
  }

  return createTitle;
})();
