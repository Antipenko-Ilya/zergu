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