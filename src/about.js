function helper(el, content, className) {
  const element = document.createElement(el);
  element.textContent = content;
  element.setAttribute('class', className);
  return element;
};

function setBtnActive(butn) {
  const activeBtn = document.querySelector('.tab.active');
  if (activeBtn) activeBtn.classList.remove('active');

  const homeBtn = document.getElementsByClassName(butn);
    homeBtn[0].classList.add('active');
}

function createAbout() {
  const introBox = helper('div', '', 'intro-text-box')
    introBox.appendChild(helper('p', 'Founded by Rodrigo Viarpi, Jeffi Piason, and Carlos Chanel, Viapias is one of the most celebrated Italian restaurants of the last century. Forbes probably put it best: “It is a fancy red-sauce joint as directed by Christopher Nolan, bringing back the punch-in-the-guts thrills of a genre that everybody else sees as uncultured and a little embarrassing, while exposing the sophistication that was always lurking there. The restaurant has a technical prowess that can make you giddy and an instinct for sheer entertainment that makes a lot of other restaurants seem like earnest, unimaginative drones.”', 'intro-text'));
    introBox.appendChild(helper('p', 'Viarpi, Piason, and Chanel—who together own the company Trinity Cibo Group—are also behind such iconic concepts as THE GILL, tomo’s, YY’s SUSHI Bar, Pomos, and Double Plate.', 'intro-text'));
  
  return introBox
}

function createSideBar() {
  const sideBar = helper('div', '', 'about-sidebar');
  const personHolder = helper('div', '', 'person-holder');
  sideBar.appendChild(personHolder);
    
  personHolder.appendChild(helper('h2', 'THE TEAM', 'team-title'));
    
    const person1 = helper('div', '', 'person');
      const personImage1 = helper('img', '', 'person-img');
      personImage1.src = '~/repos/restaurant-page/dist/images/chef-1.jpg';
      person1.appendChild(personImage1);
      person1.appendChild(helper('h4', 'RODRIGO VIARPI', ''));
 
    const person2 = helper('div', '', 'person');
      const personImage2 = helper('img', '', 'person-img');
      personImage2.src = '~/repos/restaurant-page/dist/images/chef-2.jpg';
      person2.appendChild(personImage2);
      person2.appendChild(helper('h4', 'JEFFI PIASON', ''));

    const person3 = helper('div', '', 'person');
      const personImage3 = helper('img', '', 'person-img');
      personImage3.src = 'https://pixabay.com/images/id-4282016/';
      person3.appendChild(personImage3);
      person3.appendChild(helper('h4', 'CARLOS CHANEL', ''));      

    personHolder.appendChild(person1);
    personHolder.appendChild(person2);
    personHolder.appendChild(person3);

    return sideBar
}

function createSideContent() {
  const sideContent = helper('div', '', 'about-content');
  const sliderHolder = helper('div', '', 'slider-holder');
  sideContent.appendChild(sliderHolder);
  sliderHolder.appendChild(helper('h2', 'PHOTOS', 'slider-title'));

      const carouselWrapper = helper('div', '', 'carousel-wrapper');
      sliderHolder.appendChild(carouselWrapper);
      const sliderImage1 = helper('img', '', 'slider-food-img');
      sliderImage1.src = '';
      carouselWrapper.appendChild(sliderImage1);

      const sliderNav = helper('div', '', 'slider-nav');
      sliderHolder.appendChild(sliderNav);
      sliderNav.appendChild(helper('a', 'PREVIOUS PHOTO', 'slider-link'));
      sliderNav.appendChild(helper('div', '|', 'divider-links'));
      sliderNav.appendChild(helper('a', 'NEXT PHOTO', 'slider-link'));

      return sideContent
}

function createTeam() {
  const teamBox = helper('div', '', 'team-box');

  teamBox.appendChild(createSideBar());
  teamBox.appendChild(createSideContent());

  return teamBox
}
  
function loadAbout() {
  const container = document.getElementsByClassName('container');
  container[0].classList.remove('flex-lay');
  container[0].classList.add('grid-lay');

  container[0].textContent = '';
  setBtnActive('about-btn');

  container[0].appendChild(createAbout());
  container[0].appendChild(createTeam());
  }
  
  export default loadAbout