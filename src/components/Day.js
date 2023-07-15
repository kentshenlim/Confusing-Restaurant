export default function Day(day, open, close) {
  const dayWrapper = document.createElement('div');
  dayWrapper.classList.add('day-wrapper', 'flex-vertical');

  const dayNode = document.createElement('h3');
  dayNode.textContent = day;

  const openNode = document.createElement('p');
  openNode.textContent = open;

  const closeNode = document.createElement('p');
  closeNode.textContent = close;

  dayWrapper.appendChild(dayNode);
  dayWrapper.appendChild(openNode);
  dayWrapper.appendChild(closeNode);

  return dayWrapper;
}
