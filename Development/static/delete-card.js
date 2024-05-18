cardConfirm.addEventListener('click', function() {
    var waitTime = 800;

    setTimeout(function() {

        document.querySelectorAll('.delete').forEach(icon => {
            icon.addEventListener('click', function() {
                var cardId = this.id.split('-')[1];
                var card = document.getElementById(cardId);

                var cardInfo = document.getElementsByClassName('card-info')[0];
                cardInfo.style.display = 'none';

                if (card) { 
                    card.remove();
                } else {
                    console.error("No card like:", cardId);
                }
            });
        });
    }, waitTime);
});
