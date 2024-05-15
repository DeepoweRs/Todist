const addIcon = document.getElementsByClassName('addIcon')[0]
const cardInfo = document.getElementsByClassName('card-info')[0]
const confirm = document.getElementsByClassName('confirm-btn')[0]
const cancel = document.getElementsByClassName('cancel-btn')[0]

addIcon.addEventListener('click', function(){
    cardInfo.style.display = 'block'
})

confirm.addEventListener("click", function(){
    cardInfo.style.display = "none"
    var mainBg = document.getElementsByClassName("main-bg")[0];
    
    var newCard = `
        <div class="card">
        <img class="line-10" src="line-100.svg" />
        <img class="line-9" src="line-90.svg" />
        <img class="line-8" src="line-80.svg" />
        <img class="line-7" src="line-70.svg" />
        <a href="#"><div class="situation">
        <div class="completed">Completed</div>
        </div></a>
        <div class="due">12 Mai - 12 Jun</div>
        <div class="categories">
        <div class="group-52">
            <div class="rectangle-35"></div>
            <div class="category-1">Category 1</div>
        </div>
        <div class="group-51">
            <div class="rectangle-36"></div>
            <div class="category-2">Category 2</div>
        </div>
        <div class="group-50">
            <div class="rectangle-37"></div>
            <div class="category-3">Category 3</div>
        </div>
        <div class="group-49">
            <div class="rectangle-38"></div>
            <div class="ct-4">Ct. 4</div>
        </div>
        </div>
        <div class="card-title">Card Title</div>
        <a href="#"><img class="add" src="/static/icons-logo/addIcon.png"/></a>
        <a href="#"><img class="delete" src="/static/icons-logo/deleteIcon.png" /></a>
    </div>
    `;
    mainBg.insertAdjacentHTML('beforeend', newCard);
})
cancel.addEventListener("click", function(){
    cardInfo.style.display = "none"
})


/*

<div class="tasks">
        <div class="bg-5">
            <div class="icon-5"></div>
            <div class="title-5">Task title</div>
        </div>
        <div class="bg-4">
            <div class="icon-4"></div>
            <div class="title-4">Task title</div>
        </div>
        <div class="b-3">
            <div class="icon-3"></div>
            <div class="title-3">Task title</div>
        </div>
        <div class="bg-2">
            <div class="icon-2"></div>
            <div class="title-2">Task title</div>
        </div>
        <div class="bg-1">
            <div class="icon-1"></div>
            <div class="title-1">Task title</div>
        </div>
        </div>
        
*/