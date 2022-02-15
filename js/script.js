
// menu-burger

const menuBurger = document.querySelector (".menu-burger");
const headerNav = document.querySelector (".header__list");
menuBurger.addEventListener("click", function(e){
    document.body.classList.toggle ("_lock");
    menuBurger.classList.toggle ("_active");
    headerNav.classList.toggle ("_active");
});

// slider

$(document).ready(function() {
    $('.slaider__wrapper').slick({
        dots: true,
        initialSlide:2,
        responsive:[
            {
                breakpoint:320,
                settings: {
                    slidesToShow:1,
                }
            },
            {
                breakpoint:768,
                settings: {
                    slidesToShow:2,
                }
            }, {
                breakpoint:1024,
                settings: {
                    slidesToShow:3,
                }
            },
        ],
        mobileFirst:true,
        appendArrows:$ ('.control'),
        appendDots:$ ('.control'),
    });
});

// spoller

document.querySelectorAll(".item__question ").forEach((item) =>
    item.addEventListener ("click", () => {
        const parent = item.parentNode;
        if (parent.classList.contains("faq__item--active-accordion")) {
            parent.classList.remove("faq__item--active-accordion")
        }
        else {
            document.querySelectorAll (".faq__item")
            .forEach((child) => child.classList.remove("faq__item--active-accordion"))
            parent.classList.toggle("faq__item--active-accordion");
        }
    })
)

// anchor

let anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        let blockID = anchor.getAttribute('href')
        if (menuBurger.classList.contains("_active")) {
            document.body.classList.remove  ("_lock");
            menuBurger.classList.remove  ("_active");
            headerNav.classList.remove ("_active");
        }
        document.querySelector ('' + blockID).scrollIntoView ({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// copy

jQuery(document).ready(function($){
    $('.input__text').click(function() {
    var $text_copy = $(this);
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($text_copy.text()).select();
    document.execCommand("copy");
    $temp.remove();
    $('.copy__text').fadeIn(400);
    setTimeout(function(){$('.copy__text').fadeOut(400);},1000);
    });
    });



