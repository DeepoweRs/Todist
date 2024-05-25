const shareBtn = document.getElementsByClassName('share-btn')[0]
const shareBtnBg = document.getElementsByClassName('share-bg')[0]

shareBtn.addEventListener('mouseover', function(){
    shareBtnBg.style = 'box-shadow: 0px 0px 15px #378CE7;'
});
shareBtn.addEventListener('mouseout', function(){
    shareBtnBg.style = ''
});

const changeBgBtn = document.getElementsByClassName('change-bg')[0]
const changeBgBg = document.getElementsByClassName('change-bg')[0]
const changeBgText = document.getElementsByClassName('change-bg-text')[0]

changeBgBtn.addEventListener('mouseover', function(){
    changeBgBg.style = "background: #424242;"
    changeBgText.style = "-webkit-text-fill-color: #ffffff;"
});
changeBgBtn.addEventListener('mouseout', function(){
    changeBgBg.style = ''
    changeBgText.style = " "
});

const toprec = document.getElementsByClassName('top-rec')[0]
const board = document.getElementsByClassName('board')[0]
const timeline = document.getElementsByClassName('timeline')[0]
const calendar = document.getElementsByClassName('calendar')[0]
const table = document.getElementsByClassName('table')[0]

board.addEventListener('click', function(){
    toprec.style = 'left: 163px;'
});
timeline.addEventListener('click', function(){
    toprec.style = 'left: 266px;'
});
calendar.addEventListener('click', function(){
    toprec.style = 'left: 388px;'
});
table.addEventListener('click', function(){
    toprec.style = 'left: 497px;'
});