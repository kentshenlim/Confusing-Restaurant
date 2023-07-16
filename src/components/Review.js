export default function Review(person, photo, quote) {
  const reviewWrapper = document.createElement('div');
  reviewWrapper.classList.add('review-wrapper');

  const personNode = document.createElement('h3');
  personNode.textContent = person;

  const quoteNode = document.createElement('q');
  quoteNode.textContent = quote;

  reviewWrapper.appendChild(personNode);
  reviewWrapper.appendChild(quoteNode);

  return reviewWrapper;
}
