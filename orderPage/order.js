let orderData = JSON.parse(localStorage.getItem('dishes'));
console.log(orderData);
let totalPrice;


function renderOrderList() {
    document.querySelector('.order__list_inner_wrapper').innerHTML = '';
    totalPrice = 0;
    orderData.forEach((dish, index) => {



        const tempDish = dish.dish;

        //totalPrice
        console.log(dish.count, ' ', tempDish.price)
        totalPrice = totalPrice + Number(dish.count) * Number(tempDish.price);
        //endTotalPrice


        const menu_page__element = document.createElement('div');
        menu_page__element.className = 'menu_page__element';

        const menu_page__element__title = document.createElement('div');
        menu_page__element__title.className = 'menu_page__element__title';


        const menu_page__element__title_wrapper = document.createElement('div');
        menu_page__element__title_wrapper.className = 'menu_page__element__title_wrapper';

        const menu_page__element__text = document.createElement('div');
        menu_page__element__text.className = 'menu_page__element__text';
        menu_page__element__text.innerHTML = tempDish.text;
        menu_page__element__title_wrapper.appendChild(menu_page__element__text);


        const menu_page__element__gr = document.createElement('span');
        menu_page__element__gr.className = 'menu_page__element__gr';
        menu_page__element__gr.innerHTML = tempDish.gr
        menu_page__element__text.appendChild(menu_page__element__gr);

        menu_page__element__title.appendChild(menu_page__element__title_wrapper);

        const menu_page__element__price = document.createElement('div');
        menu_page__element__price.className = 'menu_page__element__price';
        menu_page__element__price.innerHTML = tempDish.price

        menu_page__element__title.appendChild(menu_page__element__price);

        const menu_page__element_description = document.createElement('div');
        menu_page__element_description.className = 'menu_page__element_description';
        menu_page__element_description.innerHTML = 'Количество: ';

        const order_change_count_minus = document.createElement('span');
        order_change_count_minus.className = 'order_change_count_minus';
        order_change_count_minus.setAttribute('data-src', index);
        order_change_count_minus.innerHTML = '-';

        const order_change_count_text = document.createElement('span');
        order_change_count_text.className = 'order_change_count_text';
        order_change_count_text.innerHTML = dish.count;

        const order_change_count_plus = document.createElement('span');
        order_change_count_plus.className = 'order_change_count_plus';
        order_change_count_plus.setAttribute('data-src', index);
        order_change_count_plus.innerHTML = '+';

        menu_page__element_description.appendChild(order_change_count_minus);
        menu_page__element_description.appendChild(order_change_count_text);
        menu_page__element_description.appendChild(order_change_count_plus);

        const menu_page__element_delete = document.createElement('div');
        menu_page__element_delete.className = 'menu_page__element_delete';
        menu_page__element_delete.innerHTML = 'Удалить из заказа';
        menu_page__element_delete.setAttribute('data-src', index);

        menu_page__element.appendChild(menu_page__element__title);
        menu_page__element.appendChild(menu_page__element_description);
        menu_page__element.appendChild(menu_page__element_delete);

        document.querySelector('.order__list_inner_wrapper').appendChild(menu_page__element);
    });
    document.querySelector('.order__total_price').innerHTML = totalPrice;
}
renderOrderList();



document.querySelector('.order__list_wrapper').addEventListener('click', (e) => {
    if (e.target.className == 'menu_page__element_delete') {
        let userStorage = Array.from(JSON.parse(localStorage.getItem('dishes')));
        console.log(userStorage[e.target.getAttribute('data-src')]);
        orderData = userStorage.filter((item, index) => {
            return (index != e.target.getAttribute('data-src'));
        })
        localStorage.setItem('dishes', JSON.stringify(orderData));
        renderOrderList();

        //cartCounter

        let cartCounter = Number(localStorage.getItem('cartCounter'));
        cartCounter--;
        localStorage.setItem('cartCounter', cartCounter);
    }

    if (e.target.className == 'order_change_count_plus') {
        orderData = orderData.map((item, index) => {
            if (index == e.target.getAttribute('data-src')) {
                item.count++;
            }
            return item;
        })
        localStorage.setItem('dishes', JSON.stringify(orderData));
        renderOrderList();
    }

    if (e.target.className == 'order_change_count_minus') {
        console.log(orderData)
        orderData = orderData.map((item, index) => {
            if (index == e.target.getAttribute('data-src')) {
                if (item.count != 1)
                    item.count--;
            }
            return item;
        })
        localStorage.setItem('dishes', JSON.stringify(orderData));
        renderOrderList();
    }
})







function call() {
    let msg = $('#forms').serialize();
    let order = JSON.stringify(orderData);
    console.log(msg + order)
    $.ajax({
        type: 'POST',
        url: 'order.php', // Если обработчик лежит не рядом с формой, то здесь следует указать полный путь до него. Например http://example.com/mail.php
        data: "data=" + order + '&' + msg,
        // 
        success: function (data) {
            $('#results').html(data);
            document.querySelector('.feedback_wrapper').style.display = 'flex';
        },
        error: function (xhr, str) {
            alert('Возникла ошибка: ' + xhr.responseCode);
        }
    });

}

function closeFeedback() {
    document.querySelector('.feedback_wrapper').style.display = 'none';
    window.location = '/';
    localStorage.removeItem('dishes');
    localStorage.removeItem('cartCounter');
}