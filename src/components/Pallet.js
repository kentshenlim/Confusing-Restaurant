export default (() => {
  function createPallet(palletTitle, contentNode, className) {
    // Main element
    const palletWrapper = document.createElement('div');
    palletWrapper.classList.add('pallet-wrapper', 'flex-vertical', className);

    // Pallet title
    const title = document.createElement('h2');
    title.textContent = palletTitle;
    palletWrapper.appendChild(title);

    // Content node
    if (contentNode) palletWrapper.appendChild(contentNode);

    return palletWrapper;
  }

  return createPallet;
})();
