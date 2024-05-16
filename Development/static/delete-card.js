confirm.addEventListener('click', function() {
    var waitTime = 800;

    setTimeout(function() {

        document.querySelectorAll('.delete').forEach(icon => {
            icon.addEventListener('click', function() {
                var cardId = this.id.split('-')[1];
                var card = document.getElementById(cardId);
                if (card) { 
                    card.remove();
                } else {
                    console.error("Kart bulunamadı:", cardId);
                }
            });
        });
    }, waitTime);
});
