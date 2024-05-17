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

document.getElementsByClassName('confirm-btn')[0].addEventListener('click', sendCardData);

function sendTaskData() {
    var taskNameData = document.getElementById("taskNameData").value;

    fetch('/createTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            taskNameData: taskNameData,
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

document.getElementsByClassName('task-confirm-btn')[0].addEventListener('click', sendTaskData);