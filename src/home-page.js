
function helper(el, content, className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
  };

  // function createIntro() {
  //       helper('p', 'WELCOME TO VIAPIAS', '');
  //       helper('p', 'Italian and Pizza Cousine', '');
  //       helper('a', 'Order Online', 'order-btn');
  // };

  function setBtnActive(butn) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
  
    const homeBtn = document.getElementsByClassName(butn);
      homeBtn[0].classList.add('active');
  }
  
  function loadHome() {
    const container = document.getElementsByClassName('container');
    container[0].classList.add('flex-lay');
    container[0].classList.remove('grid-lay');
  
    container[0].textContent = '';
  
    // const aboutSection = createIntro();
  
    setBtnActive('home-btn');
  
    container[0].appendChild( helper('p', 'WELCOME TO VIAPIAS', ''));
    container[0].appendChild(helper('p', 'Italian and Pizza Cousine', ''));
    container[0].appendChild(helper('a', 'Order Online', 'order-btn'));
    
  }
  
  export default loadHome;