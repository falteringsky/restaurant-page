
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

  function foodIngredients (ingri1, ingri2, ingri3, ingri4) {
    const listIngredients = helper('p', '', 'list-ingredients');
    listIngredients.textContent = `${ingri1} + ${ingri2} + ${ingri3} + ${ingri4}`;
    return listIngredients
  }

  function createFoodItem (price, menuitem) {
    const food = helper('div', '', 'box-menuitem');
        food.appendChild(helper('span', `${menuitem}`, ''));
        food.appendChild(helper('span', '', 'underline'));
        food.appendChild(helper('span', `${price}`, ''));

    return food
  }

  //can be improved a lot by having a function that creates the food section, add to it a function that creates fooditems under it
  function createFoodSection(menutitle, menuitem1, price1, ing1, ing2, ing3, ing4, menuitem2, price2, ing5, ing6, ing7, ing8) {
    const menu = helper('div', '', `box-${menutitle}`);
        menu.appendChild(helper('h3', menutitle, 'h-title'));

    const foodItem = createFoodItem(price1, menuitem1);
    menu.appendChild(foodItem);
    // const food1 = helper('div', '', `box-${menuitem1}`);
    //     const foodDetails1 = menu.appendChild(food1);
    //         foodDetails1.appendChild(helper('span', `${menuitem1}`, ''));
    //         foodDetails1.appendChild(helper('span', '', 'underline'));
    //         foodDetails1.appendChild(helper('span', `${price1}`, ''));

    menu.appendChild(foodIngredients(ing1, ing2, ing3, ing4));

    menu.appendChild(createFoodItem(price2, menuitem2));
    menu.appendChild(foodIngredients(ing5, ing6, ing7, ing8));
    // const food2 = helper('div', '', `box-${menuitem2}`);
    //     const foodDetails2 = menu.appendChild(food2);
    //         foodDetails2.appendChild(helper('span', `${menuitem2}`, ''));
    //         foodDetails2.appendChild(helper('span', '', 'underline'));
    //         foodDetails2.appendChild(helper('span', `${price2}`, ''));

    // menu.appendChild(helper('p', ingredients(ing5, ing6, ing7, ing8), `${menuitem2}-ingredients`));
  
    return menu
  }

  function loadMenu() {
    const container = document.getElementsByClassName('container');
    container[0].classList.add('grid-lay');
    container[0].classList.remove('flex-lay');
  
    container[0].textContent = '';
    setBtnActive('menu-btn');
  
    const foods = [
        createFoodSection('Pizza', 'Quattro Formaggi', '35', 'Mozzarella', 'Gorgonzola', 'Fontina', 'Grana Padano', 'Napoletana', '40', 'Dough Type 0', 'Brewer Yeast', 'Buffalo Mozzarella', 'San Martano Tomatoe'),
        createFoodSection('Pasta', 'Fettuccine Alfredo', '20', 'Heavy Cream', 'Garlic Clove', 'Parmesan Cheese', 'Italian Parsley', 'Spaghetti', '25', 'Extra-virgin Oil', 'Garlic Cloves', 'Anchovies', 'Carbonara Sauce'),
        createFoodSection('Meat', 'Barilla Lasagna', '15', 'Italian Sausage', 'Mozzarella Cheese', 'Parmigiano-Reggiano cheese', 'Ricotta Cheese', 'Meatballs', '18', 'Ground Beef/Pork', 'Onions', 'Parmesan Cheese', 'Black & Red pepper'),
        createFoodSection('Desserts', 'Canestrelli', '7', 'Egg Yolks', 'Conrstarch', 'Vanilla Extract', 'Confectioners Sugar', 'Lemon Ricotta Cake', '8', 'Vanilla Extract', 'Caster Sugar', 'Almond Meal', 'Lemon Zest'),
    ];
  
    foods.forEach((food) => {
      container[0].appendChild(food);
    });
  }

  export default loadMenu;