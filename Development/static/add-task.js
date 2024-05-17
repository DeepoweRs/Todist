confirm.addEventListener('click', function(){
    waitTime = 800

    setTimeout(function(){
        document.querySelectorAll('.add').forEach(addIcon => {
            addIcon.addEventListener('click', function() {
                var taskInfo = document.getElementsByClassName('task-info')[0];
                taskInfo.style.display = 'block';
            });
        });
    }, waitTime);
});