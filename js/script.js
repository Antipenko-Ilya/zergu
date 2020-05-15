function hideModal(){
    let modal = document.querySelector('.modal');
    // let body = document.querySelector('body');
    if (modal.style.display==='flex') {
        modal.style.display = 'none';
        // body.addEventListener('click', hideModal());
    }
}
function showModal(){
    let modal = document.querySelector('.modal');
    // let body = document.querySelector('body');
    if (modal.style.display==='none') {
        modal.style.display = 'flex';
        // body.addEventListener('click', hideModal());
    }
}