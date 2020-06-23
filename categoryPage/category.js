function createMenu(menuData) {
    const category = localStorage.getItem('tempCategory');
    console.log(category)
    menuData.map(item => {
        if (item.category != category) return;
        const menu_page__element = document.createElement('div');
        menu_page__element.className = 'menu_page__element';

        const menu_page__element__title = document.createElement('div');
        menu_page__element__title.className = 'menu_page__element__title';


        const menu_page__element__title_wrapper = document.createElement('div');
        menu_page__element__title_wrapper.className = 'menu_page__element__title_wrapper';

        const menu_page__element__text = document.createElement('div');
        menu_page__element__text.className = 'menu_page__element__text';
        menu_page__element__text.innerHTML = item.isNew ? '<span style="font-weight: bold; color: #6b0101;">NEW </span>' + item.text : item.text;
        menu_page__element__title_wrapper.appendChild(menu_page__element__text);


        const menu_page__element__gr = document.createElement('span');
        menu_page__element__gr.className = 'menu_page__element__gr';
        menu_page__element__gr.innerHTML = item.gr
        menu_page__element__text.appendChild(menu_page__element__gr);

        menu_page__element__title.appendChild(menu_page__element__title_wrapper);

        const menu_page__element__price = document.createElement('div');
        menu_page__element__price.className = 'menu_page__element__price';
        menu_page__element__price.innerHTML = item.price
        menu_page__element__title.appendChild(menu_page__element__price);

        const menu_page__element_description = document.createElement('div');
        menu_page__element_description.className = 'menu_page__element_description';
        menu_page__element_description.innerHTML = item.descr;

        const menu_page__element_button = document.createElement('div');
        menu_page__element_button.className = 'menu_page__element_button';
        menu_page__element_button.innerHTML = 'Добавить в корзину';
        menu_page__element_button.setAttribute('data-src', item.id);

        menu_page__element.appendChild(menu_page__element__title);
        menu_page__element.appendChild(menu_page__element_description);
        menu_page__element.appendChild(menu_page__element_button);

        document.querySelector('.category_section').appendChild(menu_page__element);
    })
}


createMenu(menuData)


let tempOrder = {};
let tempDish;
let tempCountOfDifDishes = localStorage.getItem('cartCounter');
let isModalAfterOrderPressed = false;

document.querySelector('.cart_counter').innerHTML = tempCountOfDifDishes;


document.querySelector('.category_section').addEventListener('click', async (event) => {
    const target = event.target;
    if (target.className == 'menu_page__element_button') {
        openOrderWrapper(target);
    }

})


// open/close order wrapper
function openOrderWrapper(target) {
    tempOrder = target.getAttribute('data-src');
    const order__wrapper = document.querySelector('.order__wrapper');
    order__wrapper.style.display = 'flex';
    findById(tempOrder);
    document.querySelector('#order__element_text').innerHTML = tempDish.text + document.querySelector('#order__element_text').innerHTML;
    document.querySelector('#order__element_gr').innerHTML = tempDish.gr;
    document.querySelector('#order__element_price').innerHTML = tempDish.price;

    setTimeout(() => {
        document.addEventListener('click', closeOrderWrapper)
    })
}

function findById(id) {
    menuData.forEach(item => {
        if (item.id == id) {
            console.log(item)
            tempDish = item;
        }
    });
}

const grElement = document.querySelector('#order__element_text').innerHTML;

function closeOrderWrapper(event) {
    if (!event || event.target.className == 'order__wrapper') {
        document.querySelector('.order__dish_counter').innerHTML = '1';
        document.querySelector('#order__element_text').innerHTML = grElement;
        document.querySelector('.order__wrapper').style.display = 'none'
        document.removeEventListener('click', closeOrderWrapper)
    }
}




//
function addToCart() {
    const cartCounter = document.querySelector('.cart_counter');
    cartCounter.innerHTML = ++tempCountOfDifDishes;
    cartCounter.style.animationName = 'cart';
    setTimeout(() => cartCounter.style.animationName = 'none', 300)

    let oldStorage = localStorage.getItem('dishes');

    const newCartItem = {
        count: document.querySelector('.order__dish_counter').innerHTML,
        dish: tempDish
    }
    let newStorageArray;
    if (oldStorage) {
        newStorageArray = JSON.parse(oldStorage);
        newStorageArray.push(newCartItem)
    } else {
        newStorageArray = [newCartItem]
    }

    localStorage.setItem('dishes', JSON.stringify(newStorageArray))
    localStorage.setItem('cartCounter', JSON.stringify(tempCountOfDifDishes))

    document.querySelector('#order__element_text').innerHTML = '';
    closeOrderWrapper();


    //show once modal
    isModalAfterOrderPressed ? '' : document.querySelector('.warning-after-order').style.display = 'flex';
    isModalAfterOrderPressed = true;
}


function orderDishCounter(num) {
    let value = Number(document.querySelector('.order__dish_counter').innerHTML);
    value += num;
    document.querySelector('.order__dish_counter').innerHTML = value;
}