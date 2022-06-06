const buttonOpenModal = document.getElementById('openmodal')

const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function(){
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event){
    const inEscKey = event.key === 'Escape'

    if(inEscKey){
        modalWrapper.classList.add('invisible')
    }
})