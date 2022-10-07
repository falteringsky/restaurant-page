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

  function createAddress() {
    const addressBox = helper('div', '', 'addres-box');
    
    addressBox.appendChild(helper('p', '🏠 3260 NW 24th St, Miami, FL', 'local-address'));
  
    const restaurantLocation = helper('iframe', '', 'address-frame');
    restaurantLocation.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14373.365448114017!2d-80.20286546499318!3d25.759285988204216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b680b32f18ad%3A0x4ad3029ff324f4d5!2sBrickell%2C%20Miami%2C%20FL!5e0!3m2!1sen!2sus!4v1665030739671!5m2!1sen!2sus";
    // restaurantLocation.alt = 'Viapias restaurant location';
  
    addressBox.appendChild(restaurantLocation)
  
    return addressBox
  }

function createContact() {
    const hoursBox = helper('div', '', 'hours-box');

    hoursBox.appendChild(helper('h3', 'Hours', 'title-time'));
    // phoneNumber.textContent = '📞 123 456 789'

    hoursBox.appendChild(helper('p', 'Tuesday: 12:00 - 22:00', 'time'));
    hoursBox.appendChild(helper('p', 'Wednesday: 12:00 - 22:00', 'time'));
    hoursBox.appendChild(helper('p', 'Thursday: 12:00 - 22:00', 'time'));
    hoursBox.appendChild(helper('p', 'Friday: 12:00 - 23:30', 'time'));
    hoursBox.appendChild(helper('p', 'Saturday: 12:00 - 23:30', 'time'));
    hoursBox.appendChild(helper('p', 'Sunday: 12:00 - 23:30', 'time'));
  
    return hoursBox
  }
  
  function loadContact() {
    const container = document.getElementsByClassName('container');
    container[0].classList.remove('flex-lay');
    container[0].classList.add('grid-lay');

    container[0].textContent = '';
    setBtnActive('contact-btn');

    container[0].appendChild(createAddress());
    container[0].appendChild(createContact());
  }
  
  export default loadContact