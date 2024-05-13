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
