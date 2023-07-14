import pokeball from '../assets/img/pokeball.png';

export default (() => {
  function createBallNode() {
    const ball = document.createElement('img');
    ball.src = pokeball;
    return ball;
  }

  function createTitle(titleText) {
    // Main element
    const titleWrapper = document.createElement('h1');
    titleWrapper.classList.add('title-wrapper');
    titleWrapper.textContent = titleText;

    // Two pokeballs
    const ballOne = createBallNode();
    const ballTwo = createBallNode();
    titleWrapper.appendChild(ballOne);
    titleWrapper.appendChild(ballTwo);

    return titleWrapper;
  }

  return createTitle;
})();
