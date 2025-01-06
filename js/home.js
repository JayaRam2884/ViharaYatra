let slides = document.querySelectorAll(".sider > div");
let slideIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000);
function Menu() {
    var names = document.querySelectorAll('.names');
    names.forEach(function(name) {
        name.classList.toggle('active');
    });
}

function search() {
    // Get input values
    const destination = document.querySelector('.search input[type="text"]').value.toLowerCase();
    
    // Get all image elements
    const images = document.querySelectorAll('.imagediv .img');

    // Hide all images initially
    images.forEach(img => img.style.display = 'none');

    // Show the image that matches the destination
    let found = false;
    images.forEach(img => {
        const country = img.querySelector('.country').textContent.toLowerCase();
        if (country.includes(destination)) {
            img.style.display = 'block';
            found = true;
        }
    });

    // Show a message if no matching place was found
    if (!found && destination !== '') {
        alert('No matching place found.');
    }
}

// Attach the search function to the button's click event
document.querySelector('.search .btn1').addEventListener('click', search);

