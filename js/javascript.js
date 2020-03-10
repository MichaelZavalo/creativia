$(document).ready(function () {
    $('.slider').slick(
        {
            arrows:true,
            dots:false,
            nextArrow: '<i class="fa fa-arrow-right"></i>',
            prevArrow: '<i class="fa fa-arrow-left"></i>',
        }
    );
});

let coll = document.getElementsByClassName('btn-active');
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
           content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight+'px'
        }
    })
}

/*coll.addEventListener('click', function () {
    document.querySelector('.collapsible').style.backgroundColo;
});

function expandText(e) {

    // 1. Получить элемент который нужно отобразить или спрятать
    var btn = e.target;
    var wrapper = btn.closest('.expand');
    var text = wrapper.querySelector('.content');

    // 2. Показать или спрятать элемент
    if (text.style.display !== 'none') {
        text.style.display = 'none';
    } else {
        text.style.display = 'block';
    }
    
}*/