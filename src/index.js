import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import './style.css';
import './background.css';
import './scrollbar.css';

(() => {
  const body = document.querySelector('body');
  const [homeNode, menuNode, contactNode] = [Home(), Menu(), Contact()];
  const hash = {
    home: homeNode,
    menu: menuNode,
    contact: contactNode,
  };

  function handleClick(event) {
    const hashKey = event.target.getAttribute('data-direct');
    const insetNode = hash[hashKey];
    body.removeChild(body.lastChild);
    body.appendChild(insetNode);
    window.scroll(0, 0); // Scroll to top when btn clicked
  }

  const tabSwitcher = document.createElement('nav');
  tabSwitcher.classList.add('flex-horizontal');
  const homeBtn = document.createElement('button');
  homeBtn.setAttribute('data-direct', 'home');
  homeBtn.textContent = 'Home';
  const menuBtn = document.createElement('button');
  menuBtn.setAttribute('data-direct', 'menu');
  menuBtn.textContent = 'Menu';
  const contactBtn = document.createElement('button');
  contactBtn.setAttribute('data-direct', 'contact');
  contactBtn.textContent = 'Contact';
  const btns = [homeBtn, menuBtn, contactBtn];
  btns.forEach((btn) => {
    const store = btn;
    store.onclick = handleClick;
  });
  tabSwitcher.append(...btns);

  body.append(...[tabSwitcher, homeNode]);
})();
