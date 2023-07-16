export default function Review(person, quote, photo) {
  const reviewWrapper = document.createElement('div');
  reviewWrapper.classList.add('review-wrapper');

  const personNode = document.createElement('h3');
  personNode.textContent = person;

  const quoteNode = document.createElement('blockquote');
  quoteNode.textContent = quote;

  reviewWrapper.appendChild(personNode);
  reviewWrapper.appendChild(quoteNode);

  return reviewWrapper;
}
