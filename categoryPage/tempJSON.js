const menuData = [{
        category: 'hot_snaks_beer',
        id: 0,
        text: 'Куриные острые крылья с соусом BBQ',
        gr: '250/50 гр',
        price: '390',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 1,
        text: ' Пивные креветки отварные, к пиву',
        gr: '200 гр',
        price: '520',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 2,
        text: 'Креветки жареные с чесноком ',
        gr: '200 гр',
        price: '520',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 3,
        text: 'Креветки ботан ',
        gr: '',
        price: '690',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 4,
        text: 'Жареные пивные креветки по-тайски',
        gr: '200/50гр',
        price: '630',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 5,
        text: 'Креветки «Батерфляй» ',
        gr: '150/30 гр',
        price: '550',
        descr: '(Королевские креветки в кляре с соусом Тар-тар)'
    },
    {
        category: 'hot_snaks_beer',
        id: 6,
        text: 'Сулугуни жареный с соусом чили',
        gr: '100/30 гр',
        price: '310',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 7,
        text: 'Кольца кальмара с соусом тар-тар',
        gr: '100/30 гр',
        price: '250',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 8,
        text: 'Луковые кольца с соусом тар-тар',
        gr: '100/30 гр',
        price: '190',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 9,
        text: 'Фиш & Чипс с соусом тар-тар',
        gr: '100/120/30 гр',
        price: '320',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 10,
        text: 'Мидии жареные с соусом Дор Блю',
        gr: '400 гр',
        price: '540',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 11,
        text: 'Мидии жареные с соусом песто',
        gr: '400 гр',
        price: '540',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 12,
        text: 'Краб волосатик',
        gr: '1 шт',
        price: '1900',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 13,
        text: 'Клешни краба-стригуна',
        gr: '1000 гр',
        price: '2700',
        descr: ''
    },
    {
        category: 'sets_beer',
        id: 14,
        text: 'Большой пивной сет на компанию',
        gr: '820/200 гр',
        price: '1100',
        descr: 'Чесночные гренки, острые куриные крылья, сулугуни жареный, кольца кальмара, луковые кольца, запеченные картофельные дольки, соуса'
    },
    {
        category: 'sets_beer',
        id: 15,
        isNew: true,
        text: 'Сырный сет под пиво',
        gr: '',
        price: '990',
        descr: 'Классические и острые сырно-куриные шарики, твисти из слоеного теста с сыром и беконом, сыр чесил, соуса'
    },
    {
        category: 'cold_snaks',
        id: 16,
        text: 'Тар-тар из говяжьей вырезки',
        gr: '150 гр',
        price: '490',
        descr: 'Говяжья вырезка, лук красный, каперсы, горчица дижонская, желток куриный, соевый соус, листья салата, гренки'
    },
    {
        category: 'cold_snaks',
        id: 17,
        text: 'Вкуснейшая закуска под водочку',
        gr: '470 гр',
        price: '410',
        descr: 'Квашеная капуста, соленый огурец, обжаренный картофель, черемша, сало соленое, зелень, лук красный, грибочки соленые'
    },
    {
        category: 'cold_snaks',
        id: 18,
        text: 'Мясная нарезка',
        gr: '160/60 гр',
        price: '470',
        descr: 'Куриный рулет, отварной говяжий язык, буженина, хрен, горчица, соленый огурец, зелень'
    },
    {
        category: 'cold_snaks',
        id: 19,
        text: 'Свиной смалец',
        gr: '150/60 гр',
        price: '270',
        descr: 'Топленое сало со шкварками и черными гренками'
    },
    {
        category: 'cold_snaks',
        id: 20,
        text: 'Тарелочка солений',
        gr: '200 гр',
        price: '220',
        descr: 'Капуста квашеная, огурец соленый, помидоры соленые, черемша соленая, перец зеленый острый, зелень в ассортименте'
    },
    {
        category: 'cold_snaks',
        id: 21,
        text: 'Овощная тарелочка',
        gr: '225 гр	',
        price: '280',
        descr: 'Помидоры розовые, огурцы, перец болгарский, редис, зелень, лук зелёный'
    },
    {
        category: 'cold_snaks',
        id: 22,
        text: 'Сырная тарелочка',
        gr: '120/45/50 гр',
        price: '650',
        descr: 'Сыр Бри, сыр моцарелла мини, сыр с плесенью, сыр Пармезан, виноград, грецкие орехи, джем'
    },
    {
        category: 'vegets',
        id: 23,
        isNew: true,
        text: 'Салат Баварский',
        gr: '200 гр',
        price: '380',
        descr: 'вкуснейшие баварские колбаски, обжаренный картофель, квашеная капуста и сочные перья лука под медово-горчичной заправкой'
    },
    {
        category: 'vegets',
        id: 24,
        text: 'Цезарь с курицей',
        gr: '160/50 гр',
        price: '420',
        descr: 'салат айсберг, соус цезарь, сыр пармезан, гренки белые, томаты черри, куриная грудка гриль'
    },
    {
        category: 'vegets',
        id: 25,
        text: 'Цезарь с креветками ',
        gr: '160/50 гр',
        price: '530',
        descr: 'салат айсберг, соус Цезарь, сыр Пармезан, гренки белые, томаты черри, креветки тигровые'
    },
    {
        category: 'vegets',
        id: 26,
        text: 'Салат Мидетеранский ',
        gr: '200 гр',
        price: '640',
        descr: 'Листья салата, креветки тигровые, мидии, коктейль морской, сливки'
    },
    {
        category: 'vegets',
        id: 27,
        text: 'Салат Шопский',
        gr: '220 гр',
        price: '380',
        descr: 'Листья салата, помидор розовый, огурец, перец болгарский, маслины, оливки, брынза, лук красный'
    },
    {
        category: 'vegets',
        id: 28,
        text: 'Салат Пражский',
        gr: '200 гр',
        price: '430',
        descr: 'Лук красный, перец болгарский, огурец маринованный, свинина филе, говядина филе, яблоко, листья салата, заправка горчичная'
    },
    {
        category: 'vegets',
        id: 29,
        text: 'Салат Императорский ',
        gr: '220 гр',
        price: '630',
        descr: 'Руккола, авокадо, соус Наршараб, сыр пармезан, креветки тигровые, бекон'
    },
    {
        category: 'vegets',
        id: 30,
        text: 'Теплый салат с говядиной',
        gr: '250 гр',
        price: '630',
        descr: 'свежие помидоры, огурцы, болгарский перец, красный лук, стебель сельдерея, обжаренная говяжья вырезка, зелень, заправлены тайским соусом'
    },
    {
        category: 'vegets',
        id: 31,
        text: 'Салат «Мясной»',
        gr: ' 200 гр',
        price: '430',
        descr: 'Говяжий язык, филе куриной грудки, свежий огурец, обжаренные шампиньоны, майонез'
    },
    {
        category: 'vegets',
        id: 32,
        text: 'Овощи с красным луком ',
        gr: '200 гр',
        price: '320',
        descr: 'и ароматным маслом'
    },
    {
        category: 'soups',
        id: 33,
        text: 'Борщ',
        gr: '300 гр',
        price: '290',
        descr: ''
    },
    {
        category: 'soups',
        id: 34,
        text: 'Суп гороховый',
        gr: '300 гр',
        price: '275',
        descr: ''
    },
    {
        category: 'soups',
        id: 35,
        text: 'Суп из перепелки',
        gr: '300 гр',
        price: '275',
        descr: ''
    },
    {
        category: 'soups',
        id: 36,
        text: 'Солянка мясная',
        gr: '300 гр',
        price: '330',
        descr: ''
    },
    {
        category: 'soups',
        id: 37,
        text: 'Грибной крем-суп ',
        gr: '300 гр',
        price: '360',
        descr: ''
    },
    {
        category: 'soups',
        id: 38,
        text: 'Супчик дня',
        gr: '300 гр',
        price: '275',
        descr: ''
    },
    {
        category: 'sausage',
        id: 39,
        text: 'Большой колбасный сет',
        gr: '600/60 гр',
        price: '1210',
        descr: ''
    },
    {
        category: 'sausage',
        id: 40,
        text: 'Малый колбасный сет',
        gr: '300/60 гр',
        price: '690',
        descr: ''
    },
    {
        category: 'main_go',
        id: 41,
        text: 'Стейк от Фельдкурата ',
        gr: '180/60 гр',
        price: '940',
        descr: 'Говяжье филе под брусничным соусом'
    },
    {
        category: 'main_go',
        id: 42,
        text: 'Пфеффер стейк ',
        gr: '180/50 гр',
        price: '940',
        descr: 'Говяжье филе под сливочно-перечным соусом'
    },
    {
        category: 'main_go',
        id: 43,
        text: 'Стейк от Пани Мюллеровой ',
        gr: '180/60/30 гр',
        price: '920',
        descr: 'Стейк лосося, лук репка, шампиньоны, белое вино, тимьян, томаты черри'
    },
    {
        category: 'main_go',
        id: 44,
        text: 'Стейк лосося со сливочно-икорным соусом ',
        gr: '180/130 гр',
        price: '990',
        descr: 'Стейк лосося, лук репка, белое вино, сливки, икра красная, лимон, томаты черри'
    },
    {
        category: 'main_go',
        id: 45,
        text: 'Куриная грудка «Швейк опять дома»',
        gr: '240 гр',
        price: '490',
        descr: 'Обжаренное куриное филе с сыром, беконом, вялеными помидорами и соусом Песто'
    },
    {
        category: 'main_go',
        id: 46,
        text: 'Филе трески со шпинатом ',
        gr: '180/130/40 гр',
        price: '540',
        descr: 'филе трески, шпинат в сливках, вяленые томаты, маслины, оливки'
    },
    {
        category: 'main_go',
        id: 47,
        text: 'Рулька «Швейк в полевой обедне» ',
        gr: '1 шт.',
        price: '940',
        descr: 'Свиное колено с тушеной  капустой, хрен, горчица, соленый огурец'
    },
    {
        category: 'main_go',
        id: 48,
        text: 'Ребра «Швейк на родине в Будейовицах»',
        gr: '300 гр',
        price: '495',
        descr: 'Свиные ребра, запечённые в медово-горчичном соусе, соус горчичный'
    },
    {
        category: 'main_go',
        id: 49,
        text: 'Свиные медальоны от денщика Фельдкурата 	',
        gr: '180/60 гр',
        price: '490',
        descr: 'Подаются со сливочно-грибным соусом'
    },
    {
        category: 'barbecue',
        id: 50,
        text: 'Шашлык свиной',
        gr: '200/60 гр',
        price: '490',
        descr: ''
    },
    {
        category: 'barbecue',
        id: 51,
        text: 'Шашлык индейка ',
        gr: '200/60 гр',
        price: '420',
        descr: ''
    },
    {
        category: 'barbecue',
        id: 52,
        text: 'Каре баранины на кости ',
        gr: '200/60 гр',
        price: '650',
        descr: ''
    },
    {
        category: 'barbecue',
        id: 53,
        text: 'Бараньи семечки ',
        gr: '250/30 гр',
        price: '460',
        descr: ''
    },
    {
        category: 'barbecue',
        id: 54,
        text: 'Лепешка из тандыра',
        gr: '1 шт.',
        price: '100',
        descr: ''
    },
    {
        category: 'barbecue',
        id: 55,
        isNew: true,
        text: 'Перепелка на гриле',
        gr: '1 шт.',
        price: '450',
        descr: ''
    },
    {
        category: 'garniers',
        id: 56,
        text: 'Картофель жареный с грибами и зеленью ',
        gr: '200 гр',
        price: '170',
        descr: ''
    },
    {
        category: 'garniers',
        id: 57,
        text: 'Картофель фри ',
        gr: '150 гр',
        price: '130',
        descr: ''
    },
    {
        category: 'garniers',
        id: 58,
        text: 'Картофель по-деревенски ',
        gr: '150 гр',
        price: '170',
        descr: ''
    },
    {
        category: 'garniers',
        id: 59,
        text: 'Картофельное пюре',
        gr: '200 гр',
        price: '190',
        descr: ''
    },
    {
        category: 'garniers',
        id: 60,
        text: 'Щелканый брамбури',
        gr: '200 гр',
        price: '210',
        descr: ''
    },
    {
        category: 'garniers',
        id: 61,
        text: 'Овощи гриль',
        gr: '150 гр',
        price: '240',
        descr: ''
    },
    {
        category: 'garniers',
        id: 62,
        text: 'Капуста тушеная',
        gr: '200 гр',
        price: '220',
        descr: ''
    },
    {
        category: 'sauses',
        id: 63,
        text: 'Соус Барбекю ',
        gr: '50 гр',
        price: '60',
        descr: ''
    },
    {
        category: 'sauses',
        id: 64,
        text: 'Соус Тар-тар',
        gr: '50 гр',
        price: '60',
        descr: ''
    },
    {
        category: 'sauses',
        id: 65,
        text: 'Соус Шашлычный',
        gr: '50 гр	',
        price: '60',
        descr: ''
    },
    {
        category: 'sauses',
        id: 66,
        text: 'Соус горчичный',
        gr: '50 гр',
        price: '60',
        descr: ''
    },
    {
        category: 'sauses',
        id: 67,
        text: 'Соус сладкий чили',
        gr: '50 гр',
        price: '90',
        descr: ''
    },
    {
        category: 'sauses',
        id: 68,
        text: 'Соус Песто ',
        gr: '50 гр',
        price: '150',
        descr: ''
    },
    {
        category: 'sauses',
        id: 69,
        text: 'Соус Дор Блю ',
        gr: '50 гр',
        price: '170',
        descr: ''
    },
    {
        category: 'deserts',
        id: 70,
        text: 'Шварцвальд',
        gr: '',
        price: '300',
        descr: ''
    },
    {
        category: 'deserts',
        id: 71,
        text: 'Чизкейк',
        gr: '',
        price: '280',
        descr: ''
    },
    {
        category: 'deserts',
        id: 72,
        text: 'Мороженое в ассортименте ',
        gr: '	1 шарик/3 шарика',
        price: '80/200',
        descr: ''
    },
    {
        category: 'deserts',
        id: 73,
        text: 'Мороженое с горячей клубникой	',
        gr: '',
        price: '200',
        descr: ''
    },
    {
        category: 'beer_toch',
        id: 74,
        text: 'Пилснер Светлое',
        gr: '0,33/0,5',
        price: '175/230',
        descr: ''
    },
    {
        category: 'beer_toch',
        id: 75,
        text: 'Зер Гут Темное ',
        gr: '0,33/0,5',
        price: '190/260',
        descr: ''
    },
    {
        category: 'beer_botled',
        id: 76,
        text: 'Светлое',
        gr: '0,5',
        price: '300',
        descr: ''
    },
    {
        category: 'beer_botled',
        id: 77,
        text: 'Темное ',
        gr: '0,5',
        price: '300',
        descr: ''
    },
    {
        category: 'beer_botled',
        id: 78,
        text: 'Безалкогольное ',
        gr: '0,5',
        price: '300',
        descr: ''
    },
    {
        category: 'beer_out',
        id: 79,
        text: 'Светлое  ',
        gr: '2,0',
        price: '600',
        descr: ''
    },
    {
        category: 'beer_out',
        id: 80,
        text: 'Темное  ',
        gr: '2,0',
        price: '750',
        descr: ''
    },
    {
        category: 'hot_snaks_beer',
        id: 81,
        text: 'Чесночные гренки с соусом Дор Блю  ',
        gr: '150/30 гр',
        price: '180',
        descr: ''
    }
]