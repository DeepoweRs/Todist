const addIcon = document.getElementsByClassName('addIcon')[0];
const cardInfo = document.getElementsByClassName('card-info')[0];
const taskInfo = document.getElementsByClassName('task-info')[0];
const cardConfirm = document.getElementsByClassName('confirm-btn')[0];
const cardCancel = document.getElementsByClassName('cancel-btn')[0];
const taskConfirm = document.getElementsByClassName('task-confirm-btn')[0];
const taskCancel = document.getElementsByClassName('task-cancel-btn')[0];
const mainBg = document.getElementsByClassName("main-bg")[0];
var CardId = ''

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
                CardId = data.id;
                tag1 = data.tag1
                tag2 = data.tag2
                tag3 = data.tag3

                var newCard = `
                    <div class="card" id='${CardId}'>
                    <img class="line-10" src="line-100.svg" />
                    <img class="line-9" src="line-90.svg" />
                    <img class="line-8" src="line-80.svg" />
                    <img class="line-7" src="line-70.svg" />
                    <a href="#"><div class="situation" id='situation-${CardId}'>
                    <div class="situation-text">Completed</div>
                    </div></a>
                    <div class="due">${DueDate}</div>
                    <div class="categories">
                    <div class="categ-1">
                        <div class="category-1">${tag1}</div>
                    </div>
                    <div class="categ-2">
                        <div class="category-2">${tag2}</div>
                    </div>
                    <div class="categ-3">
                        <div class="category-3">${tag3}</div>
                    </div>
                    </div>
                    <div class="card-title">${CardTitle}</div>
                    <a href="#"><img class="add" src="/static/icons-logo/addIcon.png" id="add-${ CardId }"/></a>
                    <a href="#"><img class="delete" src="/static/icons-logo/deleteIcon.png" id="delete-${ CardId }" /></a>
                </div>
                `;
                mainBg.insertAdjacentHTML('beforeend', newCard);

                var cardCount = document.querySelectorAll('.card')
                const card = document.getElementById(`${CardId}`)

                if (cardCount.length == 1){
                    
                } else if (cardCount.length == 2) {
                    card.style.left = '390px';
                } else if (cardCount.length == 3) {
                    card.style.left = '690px';
                } else if (cardCount.length == 4) {
                    card.style.left = '990px';
                } else if (cardCount.length == 5) {
                    card.style.left = '1290px';
                }

                const situation = document.getElementById(`situation-${CardId}`)
                const sitouationText = situation.getElementsByClassName('situation-text')[0]
                var situationColor = 'green'
        
                situation.addEventListener('click', function(){
                    if (situationColor === 'green') {
                        situation.style.background = 'rgb(231, 226, 124)'
                        situationColor = 'yellow'
                        sitouationText.innerHTML = 'In Progress'
                    } else if (situationColor === 'yellow') {
                        situation.style.background = 'rgb(250, 124, 124)'
                        situationColor = 'red'
                        sitouationText.innerHTML = 'Problem Detected'
                    } else if (situationColor === 'red'){
                        situation.style.background = 'rgb(145, 216, 134)'
                        situationColor = 'green'
                        sitouationText.innerHTML = 'Completed'
                    };
                });
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

                var TaskTitle = data.task_title;
                var TaskId = data.id;
                var AddIconId = data.AddIconId
                var taskStatus = data.taskStatus
                var parent = document.getElementById(`${AddIconId}`)

                var newTask = `
                <div class="task" id="task-${TaskId}">
                <a href='#'><img class="completedIcon" id='status-${taskStatus}' src='/static/icons-logo/taskCompletedIcon.png'></a>
                <a href='#'><img class="progressIcon" id='status-${taskStatus}' src='/static/icons-logo/taskProgressIcon.png'></a>
                <div class="title">${TaskTitle}</div>
                </div>
                `;
                parent.insertAdjacentHTML('beforeend', newTask);

                var taskCount = parent.querySelectorAll('.task')
                const task = document.getElementById(`task-${TaskId}`)
                console.log(taskCount, parent, task)

                if (taskCount.length == 1){
                    task.style.top = '50px';
                } else if (taskCount.length == 2) {
                    task.style.top = '110px';
                } else if (taskCount.length == 3) {
                    task.style.top = '170px';
                } else if (taskCount.length == 4) {
                    task.style.top = '230px';
                } else if (taskCount.length == 5) {
                    task.style.top = '290px';
                }

                const progressIcon = document.getElementById(`task-${TaskId}`).getElementsByClassName('progressIcon')[0];
                const completedIcon = document.getElementById(`task-${TaskId}`).getElementsByClassName('completedIcon')[0];

                progressIcon.addEventListener('click', function(){
                    progressIcon.style.display = 'none'
                    completedIcon.style.display = 'block'
                    fetch('changeTaskStatus', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            taskStatus: 1,
                            TaskId: TaskId   
                        })
                    });
                })
                completedIcon.addEventListener('click', function(){
                    completedIcon.style.display = 'none'
                    progressIcon.style.display = 'block'
                    
                    var xhr = new XMLHttpRequest();
                    var url = "/changeTaskStatus"; // Göndermek istediğiniz URL'yi buraya yazın
                    var data = {
                        taskStatus: 0,
                        TaskId: TaskId   
                    };

                    xhr.open("POST", url, true);
                    xhr.setRequestHeader("Content-type", "application/json");

                    xhr.onerror = function() {
                        console.error("Error");
                    };

                    xhr.onload = function() {
                        // Konsola herhangi bir mesaj yazdırmıyoruz
                    };
                    
                    xhr.send(JSON.stringify(data));
                    
                    
                    /*fetch('changeTaskStatus', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            taskStatus: 0,
                            TaskId: TaskId   
                        })
                    });*/
                })
            })
        }, waitTime);
});

taskCancel.addEventListener("click", function(){
    cardInfo.style.display = "none"
})