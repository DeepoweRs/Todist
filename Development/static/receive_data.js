function fetchData() {
    fetch('/get_task_info')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

document.getElementById('fetchButton').addEventListener('click', fetchData);
