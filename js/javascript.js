$(document).ready(function () {
    $('.slider').slick(
        {
            arrows:true,
            dots:false,
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
            content.style.maxHeight = content.scrollHeight+'85px'
        }
    })
}

$(document).ready(function () {
    $('.clients-slider').slick(
        {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots:true,
        }
    );
});

$('.menu-btn').on('click', function(){
$(this).toggleClass('menu-btn-active');
$('.menu-block').toggleClass('menu-block-active');
$('.wr-promo').toggleClass('.wr-promo-active'); 
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

function backToTop() {
    let button = $ ('.back-to-top');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 1500 ) {
            button.fadeIn();
        }
        else {
            button.fadeOut();
        }
    });

    button.on('click',(e) => {
        e.preventDefault();
        $('html').animate({scrollTop:0}, 1000 );
    })
}

backToTop();
