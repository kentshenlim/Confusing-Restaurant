export default (() => {
  function createPallet(palletTitle, titleBall, contentNode, className) {
    // Main element
    const palletWrapper = document.createElement('div');
    palletWrapper.classList.add('pallet-wrapper', 'flex-vertical', className);

    // Title ball
    const ball = document.createElement('img');
    ball.src = titleBall;
    ball.classList.add('shake');

    // Title text
    const title = document.createElement('h2');
    title.textContent = palletTitle;

    // Title wrapper
    const titleWrapper = document.createElement('div');
    titleWrapper.classList.add('flex-horizontal');
    titleWrapper.append(ball);
    titleWrapper.append(title);
    palletWrapper.append(titleWrapper);

    // Content node
    if (contentNode) palletWrapper.appendChild(contentNode);

    return palletWrapper;
  }

  return createPallet;
})();
