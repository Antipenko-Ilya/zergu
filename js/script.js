let slideIndex = 0;

let slides = document.querySelector('.slides').style.display= 'block';

function showSlides(n){
    let slides = Array.from(document.querySelectorAll('.slides'));

    slides[slideIndex].style.opacity = '0';
    let tempIndex = slideIndex;
    setTimeout(()=>{
            slides[tempIndex].style.display = 'none';
            
    }, 300)

    slideIndex+=n;

    if(slideIndex >= slides.length){
        slideIndex = 1;
    }
    else if(slideIndex < 1) {
        slideIndex = slides.length;
    }
    
    setTimeout(()=>{
        slides[slideIndex].style.display ='block';
        setTimeout(()=>slides[slideIndex].style.opacity ='1')
    }, 300)
}

function hideModal(){
    console.log('ge')
    let modal = document.querySelector('.modal_wrapper');
    // let body = document.querySelector('body');
    if (event.target.className=='modal_wrapper') {
        
        modal.style.opacity = '0';
        modal.style.transform = "translateY(100px)"
        setTimeout(()=>{
            modal.style.display = 'none';
        }, 300)
        document.removeEventListener('click', hideModal);
    }
}
function showModal(){
    let modal = document.querySelector('.modal_wrapper');
    // let body = document.querySelector('body');
    if (modal.style.display==='none') {
        modal.style.display = 'flex';
        setTimeout(()=> {
            modal.style.opacity = '1';
            modal.style.transform = "translateY(0px)"
        })
        document.addEventListener('click', hideModal);
    }
}

$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
});

function showMenu() {
    console.log('show')
    document.querySelector('.navbar').style.display = "flex";
    setTimeout(()=>window.addEventListener('click', hideMenu), 300);
}

function hideMenu() {
    console.log('hide')
    document.querySelector('.navbar').style.display = "none";
    window.removeEventListener('click', hideMenu);
}

$(function(){
    $("a[href^='#']").click(function(){
            if (document.documentElement.clientWidth<800) {
                document.querySelector('.navbar').style.display = 'none'
            }
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, {
                duration: 1000, 
                specialEasing: {
                    scroll: 'swing',
                }
            });
            return false;
    });
});

const menuData1 = [
    {
        text: 'Куриные острые крылья с соусом BQ',
        gr: '250/50 гр',
        price: '390',
        descr: ''
    },
    { 		
        text: ' Пивные креветки отварные, к пиву',
        gr: '200 гр',
        price: '520',
        descr: ''
    }
]

const menuData2 = [
    {
        text: 'Большой пивной сет на компанию',
        gr: '820/200 гр',
        price: '1100',
        descr: ''
    },
    { 		
        text: ' Пивные креветки отварные, к пиву',
        gr: '200 гр',
        price: '520',
        descr: ''
    }
]
//test

function createMenu(index, menuData) {
    menuData.map(item => {
        const menu_page__element = document.createElement('div');
        menu_page__element.className = 'menu_page__element';
        
        const menu_page__element__title = document.createElement('div');
        menu_page__element__title.className = 'menu_page__element__title';
            const menu_page__element__title_wrapper = document.createElement('div');
            menu_page__element__title_wrapper.className = 'menu_page__element__title_wrapper';
        
                const menu_page__element__text  = document.createElement('div');
                menu_page__element__text.className = 'menu_page__element__text';
                menu_page__element__text.innerHTML=item.text
                menu_page__element__title_wrapper.appendChild(menu_page__element__text);
                
        
                const menu_page__element__gr= document.createElement('div');
                menu_page__element__gr.className = 'menu_page__element__gr';
                menu_page__element__gr.innerHTML=item.gr
                menu_page__element__title_wrapper.appendChild(menu_page__element__gr);
                
            menu_page__element__title.appendChild(menu_page__element__title_wrapper);
        
            const menu_page__element__price = document.createElement('div');
            menu_page__element__price.className = 'menu_page__element__price';
            menu_page__element__price.innerHTML=item.price
            menu_page__element__title.appendChild(menu_page__element__price);
        
        const menu_page__element_description = document.createElement('div');
        menu_page__element_description.className = 'menu_page__element_description';
        menu_page__element_description.innerHTML = item.descr;
        
        menu_page__element.appendChild(menu_page__element__title);
        menu_page__element.appendChild(menu_page__element_description);
        
        document.querySelector('.b-load>div:nth-child('+index+') .menu_page__content').appendChild(menu_page__element)
    })


}

createMenu(2, menuData1)
createMenu(3, menuData2)