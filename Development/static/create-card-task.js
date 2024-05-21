//Send card data to Flask
function sendCardData() {
    var cardNameData = document.getElementById("nameData").value;
    var tagData = document.getElementById("tagData").value;
    var dueData = document.getElementById("dueData").value;

    fetch('/createCard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            cardNameData: cardNameData,
            tagData: tagData,
            dueData: dueData
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data.message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

cardConfirm.addEventListener('click', sendCardData);

function sendTaskData() {
    var taskNameData = document.getElementById("taskNameData").value;
    var taskDescriptionData = document.getElementById("taskDescriptionData").value;
    var taskStatus = 0

    fetch('/createTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            taskNameData: taskNameData,
            AddIconId: AddIconId,
            taskStatus: taskStatus,
            taskDescriptionData: taskDescriptionData
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data.message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

taskConfirm.addEventListener('click', sendTaskData);