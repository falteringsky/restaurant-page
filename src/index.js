import createHome from './initial-page';
import loadHome from './home-page';
import loadMenu from './menu';
import loadContact from './contact';
import loadAbout from './about';

init();

function addNavEvents() {
  const homeBtn = document.getElementsByClassName('home-btn');
  const menuBtn = document.getElementsByClassName('menu-btn');
  const aboutBtn = document.getElementsByClassName('about-btn');
  const contactBtn = document.getElementsByClassName('contact-btn');

  homeBtn[0].addEventListener('click', loadHome);
  menuBtn[0].addEventListener('click', loadMenu);
  aboutBtn[0].addEventListener('click', loadAbout);
  contactBtn[0].addEventListener('click', loadContact);
}

function init() {
  createHome();
  loadHome();
  addNavEvents();
}