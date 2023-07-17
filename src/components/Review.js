export default function Review(person, imgSrc, review) {
  const reviewWrapper = document.createElement('div');
  reviewWrapper.classList.add('review-wrapper', 'flex-horizontal');

  const personNode = document.createElement('div');
  personNode.classList.add('flex-vertical');
  const personName = document.createElement('h3');
  personName.textContent = person;
  const personImg = document.createElement('img');
  personImg.src = imgSrc;
  personImg.classList.add('img-round-corner');
  personNode.append(...[personName, personImg]);

  const quoteNode = document.createElement('blockquote');
  quoteNode.textContent = review;

  reviewWrapper.append(...[personNode, quoteNode]);

  return reviewWrapper;
}
