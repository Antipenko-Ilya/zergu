
//slider
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
        slideIndex = slides.length-1;
    }
    
    setTimeout(()=>{
        slides[slideIndex].style.display ='block';
        setTimeout(()=>slides[slideIndex].style.opacity ='1');
    }, 300);
}

//animation

new WOW().init();

//modal
function hideModal(){
    console.log('ge')
    let modal = document.querySelector('.modal_wrapper');
    // let body = document.querySelector('body');
    if (event.target.className=='modal_wrapper' || event.target.className=="modal-btn") {
        
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

//menu
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


//scroll
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
//scroll top
$(document).ready(() => {
    $('.btn_up').fadeOut()
    $(window).scroll(() => $(this).scrollTop() < 50 ? $('.btn_up').fadeOut() : $('.btn_up').fadeIn());
    
    $('.btn_up').click(() => {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

//menu

// createMenu(2, menuData1)
// createMenu(3, menuData2)
// createMenu(4, menuData3)
// createMenu(5, menuData4)
// createMenu(6, menuData5)

//afterSubmit
function showAfterSubmit() {
    hideModal()
    let modalAfter = document.querySelector('.modal-after_wrapper');
    modalAfter.style.display = "flex";
    setTimeout(()=> modalAfter.style.display = "none", 6000);
}
