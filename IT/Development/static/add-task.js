var AddIconId = ''

cardConfirm.addEventListener('click', function(){
    waitTime = 800

    setTimeout(function(){
        document.querySelectorAll('.add').forEach(addIcon => {
            addIcon.addEventListener('click', function() {
                var taskInfo = document.getElementsByClassName('task-info')[0];
                AddIconId = this.id.split('-')[1]

                taskInfo.style.display = 'block';
            });
        });
    }, waitTime);
});