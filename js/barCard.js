function createBarCard(index, menuData) {
    menuData.map(item => {
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


        menu_page__element.appendChild(menu_page__element__title);
        menu_page__element.appendChild(menu_page__element_description);


        document.querySelector(`.bar_card__slide:nth-child(${index}) .bar_card__slide__info`).appendChild(menu_page__element);
    })
}

const barCardData = {
//     {
//         Фернет Цитус 50 мл						250
// Сливовица (золотая, белая) 50 мл				250
// Сливовица «Богемский мед» 50 мл			250
// Абсент ПРЕМИУМ 50 мл					250
// Грушовица 50 мл						250
// Абрикосовица 50 мл						250
// Яблоковица 50 мл						250
// Портеровица 50 мл						250
// Туземак — Туземский Ром 50 мл				300
// Штро 40 50 мл							300
// Штро 60 50 мл							300
// Штро 80 50 мл							300
//     },
    data_1: [
        {
            text: 'Фернет Цитус',
            gr: '50 мл	',
            price: '250',
            descr: '',
        },
        {
            text: 'Сливовица',
            gr: '50 мл',
            price: '250',
            descr: '(золотая, белая)',
        },
        {
            text: 'Сливовица «Богемский мед» ',
            gr: '50 мл',
            price: '250',
            descr: ' ',
        },
        {
            text: 'Абсент ПРЕМИУМ',
            gr: '50 мл',
            price: '250',
            descr: '',
        },
        {
            text: 'Грушовица ',
            gr: '50 мл',
            price: '250',
            descr: '',
        },
        {
            text: 'Абрикосовица',
            gr: '50 мл',
            price: '250',
            descr: '',
        },
        {
            text: 'Яблоковица',
            gr: '50 мл',
            price: '250',
            descr: '',
        },
        {
            text: 'Портеровица ',
            gr: '50 мл',
            price: '250',
            descr: '',
        },
        {
            text: 'Туземак — Туземский Ром ',
            gr: '50 мл',
            price: '300',
            descr: '',
        },
        {
            text: 'Штро 40',
            gr: '50 мл',
            price: '300',
            descr: '',
        },
        {
            text: 'Штро 60 ',
            gr: '50 мл',
            price: '300',
            descr: '',
        },
        {
            text: 'Штро 80 ',
            gr: '50 мл',
            price: '300',
            descr: '',
        },
    ],
    data_2: [
        {
            text: 'Национальная коллекция (Россия)',
            gr: '',
            price: '850',
            descr: 'брют, поусладкое',
        },
        {
            text: 'Лаветти (Россия)',
            gr: '',
            price: '550',
            descr: 'Classic, Ice, Fresco, Rose, Crema de Vanilla',
        },
        {
            text: 'ЛАМБРУСКО (Италия)',
            gr: '',
            price: '850',
            descr: 'Красное, белое',
        },
        {
            text: 'СИДР',
            gr: '',
            price: '390',
            descr: 'В ассортименте',
        },
    ],
    data_3: [
        {
            text: 'Ле Гарриг (Франция)	',
            gr: '',
            price: '1100',
            descr: '',
        },
        {
            text: 'Кьянти (Италия)',
            gr: '',
            price: '1200',
            descr: 'сухое',
        },
        {
            text: 'АПСНЫ (Абхазия) ',
            gr: '',
            price: '890',
            descr: 'полусладкое',
        },
        {
            text: 'Алазанская долина (Грузия) ',
            gr: '',
            price: '875',
            descr: 'полусладкое',
        },
        {
            text: 'Мукузани (Грузия) ',
            gr: '',
            price: '875',
            descr: 'сухое',
        },
        {
            text: 'Киндзмараули',
            gr: '',
            price: '990',
            descr: 'полусладкое',
        },
        {
            text: 'КАСИЛЬДА Каберне (Чили)',
            gr: '',
            price: '875',
            descr: 'сухое',
        },
    ],
    data_4: [
        {
            text: 'Ле Гарриг (Франция)	',
            gr: '',
            price: '1100',
            descr: '',
        },
        {
            text: 'ПСОУ (Абхазия) ',
            gr: '',
            price: '890 ',
            descr: 'полусладкое',
        },
        {
            text: 'Шардоне ',
            gr: '',
            price: '1100',
            descr: 'сухое',
        },
        {
            text: 'Алазанская долина (Грузия) ',
            gr: '',
            price: '875',
            descr: 'полусладкое',
        },
        {
            text: 'Цинандаои (Грузия) 	',
            gr: '',
            price: '875',
            descr: 'сухое',
        },
        {
            text: 'Пино Гриджио (Италия)',
            gr: '',
            price: '1100',
            descr: '',
        },
        {
            text: 'КАСИЛЬДА (Чили) 	',
            gr: '',
            price: '875',
            descr: '',
        },
        {
            text: 'Совиньон Блан ',
            gr: '',
            price: '875',
            descr: 'сухое',
        },
    ],

    
    data_5: [
        {
            text: 'Мартини Бьянко ',
            gr: '50 мл',
            price: '150',
            descr: '',
        },
        {
            text: 'Мартини Экстра драй',
            gr: '50 мл',
            price: '150',
            descr: '',
        },
    ],
    data_6: [
        {
            text: 'Горал Мастер',
            gr: '50 мл',
            price: '130',
            descr: '',
        },
        {
            text: 'Горал Мастер',
            gr: '50 мл',
            price: '150',
            descr: 'клюква',
        },
        {
            text: 'Наши традиции',
            gr: '50 мл',
            price: '80  ',
            descr: '',
        },
        {
            text: 'Царская оригинальная',
            gr: '50 мл',
            price: '110',
            descr: '',
        },
        {
            text: 'Национальная коллекция',
            gr: '50 мл',
            price: '90',
            descr: '',
        },
        {
            text: 'Граппа Верони',
            gr: '50 мл',
            price: '140',
            descr: '',
        },
        {
            text: 'Финляндия',
            gr: '50 мл',
            price: '150',
            descr: '',
        },
        {
            text: 'Финляндия клюква',
            gr: '50 мл',
            price: '180',
            descr: '',
        },
    ],
    data_7: [
        {
            text: 'Баллантайс',
            gr: '50 мл',
            price: '250',
            descr: '',
        },
        {
            text: "Джек Дэниел'с",
            gr: '50 мл',
            price: '320',
            descr: '',
        },
        {
            text: 'Джемессон',
            gr: '50 мл',
            price: '280',
            descr: '',
        },
        {
            text: 'Инглиш Парк',
            gr: '50 мл',
            price: '220',
            descr: '',
        },
        {
            text: 'Чивас Ригал (12 лет)',
            gr: '50 мл',
            price: '450',
            descr: '',
        },
    ],
    data_8: [
        {
            text: 'Ольмека серебряная',
            gr: '50 мл	',
            price: '270',
            descr: '',
        },
        {
            text: 'Ольмека золотая ',
            gr: '50 мл	',
            price: '300',
            descr: '',
        },
        {
            text: 'Максимо де Кодорниз Сильвер',
            gr: '50 мл	',
            price: '210',
            descr: '',
        },
    ],
    data_9: [
        {
            text: 'Арарат 5* 							',
            gr: '50 мл',
            price: '220',
            descr: '',
        },
        {
            text: 'Арарат 3*',
            gr: '50 мл',
            price: '200',
            descr: '',
        },
        {
            text: 'Северная звезда 5*',
            gr: '50 мл',
            price: '160',
            descr: '',
        },
        {
            text: 'Киновский',
            gr: '50 мл',
            price: '180',
            descr: '',
        },
        {
            text: 'Hennessy VS  ',
            gr: '50 мл',
            price: '550',
            descr: '',
        },
        {
            text: 'Courvoisier VS ',
            gr: '50 мл',
            price: '500',
            descr: '',
        },
    ],
    data_10: [
        {
            text: 'Баккарди Карта Бланка',
            gr: '50 мл',
            price: '250',
            descr: '',
        },
        {
            text: 'Баккарди Карта Нэгра',
            gr: '50 мл',
            price: '250',
            descr: '',
        },
        {
            text: 'Карта Вьеха Экстра Кларо ',
            gr: '50 мл',
            price: '200',
            descr: '',
        },
        {
            text: 'Капитан Морган',
            gr: '50 мл',
            price: '200',
            descr: '',
        },
    ],
    data_11: [
        {
            text: 'Бехеровка',
            gr: '50 мл',
            price: '180',
            descr: '',
        },
        {
            text: 'Апероль  ',
            gr: '50 мл',
            price: '220',
            descr: '',
        },
        {
            text: 'Ягермейстер',
            gr: '50 мл',
            price: '180',
            descr: '',
        },
        {
            text: 'Бейлиз',
            gr: '50 мл',
            price: '180',
            descr: '',
        },
        {
            text: 'Калуа',
            gr: '50 мл',
            price: '270',
            descr: '',
        },
        {
            text: 'Малибу',
            gr: '50 мл',
            price: '250',
            descr: '',
        },
        {
            text: 'Самбука Верони ',
            gr: '50 мл',
            price: '180',
            descr: '',
        },
        {
            text: 'Трипл Сек Верони',
            gr: '50 мл',
            price: '180',
            descr: '',
        },
        {
            text: 'Куантро',
            gr: '50 мл',
            price: '220',
            descr: '',
        },
        {
            text: 'Абсент',
            gr: '50 мл',
            price: '270',
            descr: '',
        },
    ],
    data_12: [
        {
            text: 'Бифитер',
            gr: '50 мл',
            price: '250',
            descr: '',
        },
        {
            text: 'Инглиш Парк',
            gr: '50 мл',
            price: '180',
            descr: '',
        },
    ],

    data_13: [
        {
            text: 'В-52 ',
            gr: '60 мл',
            price: '300',
            descr: '',
        },
        {
            text: 'Виски-кола',
            gr: '250 мл',
            price: '250',
            descr: '',
        },
        {
            text: 'Космополитен',
            gr: '300 мл	',
            price: '250',
            descr: '',
        },
        {
            text: 'Куба Либре ',
            gr: '300 мл',
            price: '300',
            descr: '',
        },
        {
            text: 'ЛонгАйленд   ',
            gr: '400 мл',
            price: '550',
            descr: '',
        },
        {
            text: 'Мохито ',
            gr: '395 мл',
            price: '370',
            descr: '',
        },
        {
            text: 'Пинаколада',
            gr: '290 мл',
            price: '350',
            descr: '',
        },
        {
            text: 'Секс на пляже ',
            gr: '230 мл',
            price: '250',
            descr: '',
        },
        {
            text: 'Текила Санрайз',
            gr: '170 мл',
            price: '320',
            descr: '',
        },
    ],

    data_14: [
        {
            text: 'Вода	с газом/без газа',
            gr: '',
            price: '90',
            descr: '',
        },
        {
            text: 'Кола/Фанта/Спрайт	',
            gr: '',
            price: '125',
            descr: '',
        },
        {
            text: 'Мохито б/а	',
            gr: '',
            price: '250',
            descr: '',
        },
        {
            text: 'Лимонад домашний ',
            gr: '0,3',
            price: '150',
            descr: '',
        },
        {
            text: 'Сок в ассортименте',
            gr: ' 0,2/1,0 л',
            price: '50/200',
            descr: '',
        },
        {
            text: 'Морс	',
            gr: '0,2/1,0 л	',
            price: '60/250',
            descr: '',
        },
        {
            text: 'Компот из сухофруктов',
            gr: '0,2/1,0 л',
            price: '60/250',
            descr: '',
        },
        {
            text: 'Фреш в ассортименте',
            gr: '0,25',
            price: '300',
            descr: '',
        },
       
    ],

    
    data_15: [
        {
            text: 'Чай чашка/чайник  	',
            gr: '',
            price: '70/150',
            descr: '',
        },
        {
            text: 'Чай фруктовый чайник',
            gr: '',
            price: '200',
            descr: '',
        },
        {
            text: 'Мятовый зазвар',
            gr: '',
            price: '250',
            descr: '',
        },
        {
            text: 'эспрессо/американо',
            gr: '',
            price: '100',
            descr: '',
        },
        {
            text: 'двойной эспрессо',
            gr: '',
            price: '150',
            descr: '',
        },
        {
            text: 'капуччино',
            gr: '',
            price: '150',
            descr: '',
        },
        {
            text: 'латте',
            gr: '',
            price: '200',
            descr: '',
        },
    ],

   
}

const cardPages = 15;
for (let i = 0; i < cardPages; i++) {
    createBarCard(i+1, barCardData['data_' + (i+1)]);
}


let currentCardTranslate = 0;
let currentCardSlide = 0;
let cardSlideWidth;
let cardSlides = Array.from(document.querySelectorAll('.bar_card__slide'));
setTimeout(()=>{
     cardSlideWidth = document.querySelector('.bar_card__slide').offsetWidth;
})
function cardSlideNext() {  
    currentCardSlide++;
    currentCardTranslate = (currentCardSlide==cardPages) ? 0 : currentCardTranslate-cardSlideWidth;
    currentCardSlide = currentCardSlide==cardPages ? 0 : currentCardSlide;
    cardSlides.forEach(item=>{
        item.style.transform = `translateX(${currentCardTranslate}px)`;
    })
}

function cardSlidePrev() {  
    currentCardSlide--;
    currentCardTranslate = (currentCardSlide==-1) ? -cardSlideWidth*(cardPages-1) : currentCardTranslate+cardSlideWidth;
    currentCardSlide = currentCardSlide==-1 ? cardPages-1 : currentCardSlide;
    cardSlides.forEach(item=>{
        item.style.transform = `translateX(${currentCardTranslate}px)`;
    })
}

