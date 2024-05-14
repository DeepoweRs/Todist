//Example get data from Flask
function fetchData() {
    fetch('/get_task_info')
        .then(response => response.json())
        .then(task_info => {
            console.log(task_info);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

document.getElementById('fetchButton').addEventListener('click', fetchData);

//Send card data to Flask
function sendData() {
    var nameData = document.getElementById("nameData").value;
    var tagData = document.getElementById("tagData").value;
    var dueData = document.getElementById("dueData").value;
    var expData = document.getElementById("expData").value;

    fetch('/createCard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nameData: nameData,
            tagData: tagData,
            dueData: dueData,
            expData: expData
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

document.getElementsByClassName('confirm-btn')[0].addEventListener('click', sendData);