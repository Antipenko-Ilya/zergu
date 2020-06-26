
//test
function createMenu(index, menuData) {
    menuData.map(item => {
        const menu_page__element = document.createElement('div');
        menu_page__element.className = 'menu_page__element';

        //const menu_page__element__is_new = document.createElement('div');
        //menu_page__element__is_new.className = 'menu_page__element__is_new'
        //menu_page__element__is_new.innerHTML = item.isNew ? 'NEW' : '';
        //menu_page__element.appendChild(menu_page__element__is_new);


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

        if (document.documentElement.clientWidth < 800) {
            document.querySelector('.menu-mobail>div:nth-child(' + index + ') .menu_page__content').appendChild(menu_page__element);
        } else document.querySelector('.b-load>div:nth-child(' + index + ') .menu_page__content').appendChild(menu_page__element);
    })


}
const pages = 23;
for (let i = 0; i < pages; i++) {
    createMenu(i + 2, globalData['menuData' + (i + 2)]);
}

function activateLeftPage() {
    document.querySelector('.b-overlay-prev').style.visibility = 'visible';
}


