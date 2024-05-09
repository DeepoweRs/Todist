const addIcon = document.getElementsByClassName('addIcon')[0]
const cardInfo = document.getElementsByClassName('card-info')[0]
const confirm = document.getElementsByClassName('confirm-btn')[0]
const cancel = document.getElementsByClassName('cancel-btn')[0]

addIcon.addEventListener('click', function(){
    cardInfo.style.display = 'block'
})

confirm.addEventListener("click", function(){
    cardInfo.style.display = "none"
})
cancel.addEventListener("click", function(){
    cardInfo.style.display = "none"
})