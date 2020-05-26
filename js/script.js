let slideIndex = 1;
showSlides(slideIndex);

function plusSliders(n) {
    showSlides(slideIndex+=n);
}

function showSlides(n){
    let slides = document.querySelectorAll('.slides');

    console.log(slides);
    

    if(n > slides.length){
        slideIndex = 1;
    }
    else if(n < 1) {
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display ='none';
        console.log(slides[i].style.display);
        
    }
    slides[slideIndex - 1].style.display ='block';
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