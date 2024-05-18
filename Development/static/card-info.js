const addIcon = document.getElementsByClassName('addIcon')[0]
const cardInfo = document.getElementsByClassName('card-info')[0]
const taskInfo = document.getElementsByClassName('task-info')[0]
const cardConfirm = document.getElementsByClassName('confirm-btn')[0]
const cardCancel = document.getElementsByClassName('cancel-btn')[0]
const taskConfirm = document.getElementsByClassName('task-confirm-btn')[0]
const taskCancel = document.getElementsByClassName('task-cancel-btn')[0]
const mainBg = document.getElementsByClassName("main-bg")[0];

addIcon.addEventListener('click', function(){
    cardInfo.style.display = 'block'
})

cardConfirm.addEventListener("click", function(){
    cardInfo.style.display = "none"
    
    var waitTime = 500;

    setTimeout(function() {
        fetch('/getCardInfo')
            .then(response => response.json())
            .then(data => {
                var CardTitle = data.card_title;
                var DueDate = data.due_date;
                var CardId = data.id;

                var newCard = `
                    <div class="card" id='${CardId}'>
                    <img class="line-10" src="line-100.svg" />
                    <img class="line-9" src="line-90.svg" />
                    <img class="line-8" src="line-80.svg" />
                    <img class="line-7" src="line-70.svg" />
                    <a href="#"><div class="situation">
                    <div class="completed">Completed</div>
                    </div></a>
                    <div class="due">${DueDate}</div>
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
                    <div class="card-title">${CardTitle}</div>
                    <a href="#"><img class="add" src="/static/icons-logo/addIcon.png" id="add-${ CardId }"/></a>
                    <a href="#"><img class="delete" src="/static/icons-logo/deleteIcon.png" id="delete-${ CardId }" /></a>
                </div>
                `;
                mainBg.insertAdjacentHTML('beforeend', newCard);
            })
        }, waitTime);
});

cardCancel.addEventListener("click", function(){
    cardInfo.style.display = "none"
})

taskConfirm.addEventListener("click", function(){
    taskInfo.style.display = "none"
    
    var waitTime = 500;

    setTimeout(function() {
        fetch('/getTaskInfo')
            .then(response => response.json())
            .then(data => {
                var card = document.getElementById('${}')[0]
                var TaskTitle = data.task_title;
                var TaskId = data.id;

                var newTask = `
                <div class="task" id="${TaskId}">
                <div class="icon"></div>
                <div class="title">${TaskTitle}</div>
                </div>
                `;
                card.insertAdjacentHTML('beforeend', newTask);
            })
        }, waitTime);
});

taskCancel.addEventListener("click", function(){
    cardInfo.style.display = "none"
})