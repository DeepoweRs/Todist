//Send card data to Flask
function sendData() {
    var nameData = document.getElementById("nameData").value;
    var tagData = document.getElementById("tagData").value;
    var dueData = document.getElementById("dueData").value;

    fetch('/createCard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nameData: nameData,
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

document.getElementsByClassName('confirm-btn')[0].addEventListener('click', sendData);