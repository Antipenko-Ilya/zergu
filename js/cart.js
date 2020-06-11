// init
let tempOrder = {};
let tempDish;
let tempCountOfDifDishes = localStorage.getItem('cartCounter');
let isModalAfterOrderPressed = false;

document.querySelector('.cart_counter').innerHTML = tempCountOfDifDishes;


document.querySelector('.book_wrapper').addEventListener('click', async (event)=>{
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
    document.querySelector('#order__element_text').innerHTML = tempDish.text+document.querySelector('#order__element_text').innerHTML;
    document.querySelector('#order__element_gr').innerHTML = tempDish.gr;
    document.querySelector('#order__element_price').innerHTML = tempDish.price;

    setTimeout(()=>{
        document.addEventListener('click', closeOrderWrapper)
    })
}
function findById(id) {
    for (let key in globalData) {
        globalData[key].forEach(item => {
            if (item.id == id) {
                console.log(item)
                tempDish = item;
            }
        });
    }
}

const grElement = document.querySelector('#order__element_text').innerHTML;
function closeOrderWrapper(event) {
    if (!event || event.target.className=='order__wrapper') {
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
    setTimeout(()=>cartCounter.style.animationName='none', 300)

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
    isModalAfterOrderPressed=true;
}


function orderDishCounter(num) {
    let value = Number(document.querySelector('.order__dish_counter').innerHTML);
    value+=num;
    document.querySelector('.order__dish_counter').innerHTML = value;
}