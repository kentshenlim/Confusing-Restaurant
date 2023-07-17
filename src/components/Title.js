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
    text.textContent = titleText;

    // Two pokeballs
    const ballOne = createBallNode();
    const ballTwo = createBallNode();

    // Append
    titleWrapper.append(...[ballOne, text, ballTwo]);

    return titleWrapper;
  }

  return createTitle;
})();
