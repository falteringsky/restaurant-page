function helper(el, content, className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
  };

  function createHome() {
    const content = document.getElementById('content');

    const homeSection = document.createElement('section');
    content.appendChild(homeSection);
    const homeHeader = homeSection.appendChild(helper('header', '' , 'home-header'));
        homeHeader.appendChild(helper('a', 'VIAPIAS', 'intro'));
        homeHeader.appendChild(helper('div', '(789)-635-2410 Call to order!', 'cellular'));

    const homeNav = homeSection.appendChild(helper('nav', '' , 'home-nav'));
        const unordList = homeNav.appendChild(helper('ul', '', 'nav-option'));
          // for(i = 1; i < 4; i++) {
          //   unordList.appendChild(helper('li', '', `r${i}`));
          // };
          const list1 = unordList.appendChild(helper('li', '', 'r1'));
          const list2 = unordList.appendChild(helper('li', '', 'r2'));
          const list3 = unordList.appendChild(helper('li', '', 'r3'));
          const list4 = unordList.appendChild(helper('li', '', 'r4'));



            const homeBtn = list1.appendChild(helper('button', 'HOME' , 'home-btn'));
                homeBtn.classList.add('tab');

            const menuBtn = list2.appendChild(helper('button', 'MENU' , 'menu-btn'));
                menuBtn.classList.add('tab');

            const aboutBtn = list3.appendChild(helper('button', 'ABOUT' , 'about-btn'));
                aboutBtn.classList.add('tab');

            const contactBtn = list4.appendChild(helper('button', 'CONTACT US' , 'contact-btn'));
                contactBtn.classList.add('tab');

    const homeMiddle = homeSection.appendChild(helper('div', '' , 'middle'));
        homeMiddle.appendChild(helper('div', '', 'container'));
        // homeContainer.appendChild(helper('p', 'WELCOME TO VIAPIAS', ''));
        // homeContainer.appendChild(helper('p', 'Italian and Pizza Cousine', ''));
        // homeContainer.appendChild(helper('a', 'Order Online', 'order-btn'));

    homeSection.appendChild(helper('footer', 'Designed by Falteringsky' , 'footer'));
  };

  export default createHome;