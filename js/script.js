
//slider
let slideIndex = 0;
let currentTranslateMinGallery = 0;
document.querySelector('.slides').style.display= 'block';
let slides = Array.from(document.querySelectorAll('.slides'));


function showSlides(n, isFromMin){
    

    

    ///
    if (!isFromMin) {
        let prevMinSlide = document.querySelector('.gallery_min-slides>div:nth-child('+(slideIndex+1)+') img');
        prevMinSlide.style.border = '3px solid transparent';


        slides[slideIndex].style.opacity = '0';
        let tempIndex = slideIndex;
        setTimeout(()=>{
                slides[tempIndex].style.display = 'none';
                
        }, 300)
    }

    slideIndex+=n;

    if(slideIndex >= slides.length){
        slideIndex = 0;
    }
    else if(slideIndex < 0) {
        slideIndex = slides.length-1;
    }

    document.querySelector('.gallery_min-slides>div:nth-child('+(slideIndex+1)+') img')
        .style.border = '3px solid white';
    


    setTimeout(()=>{
        slides[slideIndex].style.display ='block';
        setTimeout(()=>slides[slideIndex].style.opacity ='1');
    }, 300);
}

function slideTo(index) {

    slides[slideIndex].style.opacity = '0';
    let tempIndex = slideIndex;
    setTimeout(()=>{
            slides[tempIndex].style.display = 'none';
            
    }, 300)

    let prevMinSlide = document.querySelector('.gallery_min-slides>div:nth-child('+(slideIndex+1)+') img');
    prevMinSlide.style.border = '3px solid transparent';

    slideIndex=index-1;
    showSlides(1, true)
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
                window.removeEventListener('click', hideMenu);
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

//warning
setTimeout(()=>{
    document.querySelector('.warning-wrapper').style.display = "flex";
    setTimeout(()=>{
        document.querySelector('.warning-wrapper').style.opacity='1';
    })
}, 1500)
    
function setAgeData(is18) {
    $('body').removeClass('stop-scrolling')
    document.querySelector('.warning-wrapper').style.opacity='0';
    setTimeout(()=>{
        document.querySelector('.warning-wrapper').style.display = "none";
    }, 700)
    if (!is18) {
       Array.from(document.querySelectorAll('.adult_content')).forEach(item=>{
           item.style.display="none";
       })
    }
}


//block scrolling
$('body').addClass('stop-scrolling')



//sendMail
function call() {
    var msg   = $('#forms').serialize();
    console.log(msg)
      $.ajax({
        type: 'POST',
        url: '../mail.php', // Если обработчик лежит не рядом с формой, то здесь следует указать полный путь до него. Например http://example.com/mail.php
        data: msg,
        success: function(data) {
          $('#results').html(data);
        },
        error:  function(xhr, str){
              alert('Возникла ошибка: ' + xhr.responseCode);
          }
      });

  }


//funcforbook
  document.querySelector('.menu_first-page').addEventListener('click', (e)=>{
    document.querySelector('#next_page_button').click();
    if(+e.target.getAttribute('data-str') > 1){
        let delay = 400;
        for(let j=1; j <= +e.target.getAttribute('data-str')-1; j++){
            setTimeout(()=>document.querySelector('#next_page_button').click(), delay);
            delay = delay + 400;
        }
    }
})


