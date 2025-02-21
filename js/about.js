$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

function Menu() {
    var names = document.querySelectorAll('.names');
    names.forEach(function(name) {
        name.classList.toggle('active');
    });
}