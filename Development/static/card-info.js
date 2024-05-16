const addIcon = document.getElementsByClassName('addIcon')[0]
const cardInfo = document.getElementsByClassName('card-info')[0]
const confirm = document.getElementsByClassName('confirm-btn')[0]
const cancel = document.getElementsByClassName('cancel-btn')[0]

addIcon.addEventListener('click', function(){
    cardInfo.style.display = 'block'
})

confirm.addEventListener("click", function(){
    cardInfo.style.display = "none"
    var mainBg = document.getElementsByClassName("main-bg")[0];
    
    var waitTime = 500; // Örneğin, 500 ms bekleyelim

    // Bekleme süresinden sonra işlemi gerçekleştiren kod
    setTimeout(function() {
        fetch('/getInfo')
            .then(response => response.json())
            .then(data => {
                var CardTitle = data.card_title;
                var DueDate = data.due_date;
                var Id = data.id;

                var newCard = `
                    <div class="card" id='${Id}'>
                    <img class="line-10" src="line-100.svg" />
                    <img class="line-9" src="line-90.svg" />
                    <img class="line-8" src="line-80.svg" />
                    <img class="line-7" src="line-70.svg" />
                    <a href="#"><div class="situation">
                    <div class="completed">Completed</div>
                    </div></a>
                    <div class="due">${DueDate}</div>
                    <div class="categories">
                    <div class="group-52">
                        <div class="rectangle-35"></div>
                        <div class="category-1">Category 1</div>
                    </div>
                    <div class="group-51">
                        <div class="rectangle-36"></div>
                        <div class="category-2">Category 2</div>
                    </div>
                    <div class="group-50">
                        <div class="rectangle-37"></div>
                        <div class="category-3">Category 3</div>
                    </div>
                    <div class="group-49">
                        <div class="rectangle-38"></div>
                        <div class="ct-4">Ct. 4</div>
                    </div>
                    </div>
                    <div class="card-title">${CardTitle}</div>
                    <a href="#"><img class="add" src="/static/icons-logo/addIcon.png" id="add-${ Id }"/></a>
                    <a href="#"><img class="delete" src="/static/icons-logo/deleteIcon.png" id="delete-${ Id }" /></a>
                </div>
                `;
                mainBg.insertAdjacentHTML('beforeend', newCard);
            })
        }, waitTime);
});

cancel.addEventListener("click", function(){
    cardInfo.style.display = "none"
})