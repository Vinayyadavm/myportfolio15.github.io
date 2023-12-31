document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    var scrollUpBtn = document.querySelector('.scroll-up-btn');
    var menuBtn = document.querySelector('.menu-btn');
    var menuItems = document.querySelectorAll('.navbar .menu li a');

    window.addEventListener("scroll", function () {
        // Sticky navbar on scroll
        navbar.classList.toggle("sticky", window.scrollY > 20);

        // Scroll-up button show/hide
        scrollUpBtn.classList.toggle("show", window.scrollY > 500);
    });

    // Slide-up script
    scrollUpBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Removing smooth scroll on slide-up button click
        document.documentElement.style.scrollBehavior = "auto";
    });

    menuItems.forEach(function (item) {
        // Applying smooth scroll on menu items click
        item.addEventListener("click", function () {
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    // Toggle menu/navbar script
    menuBtn.addEventListener("click", function () {
        document.querySelector('.navbar .menu').classList.toggle("active");
        menuBtn.querySelector('i').classList.toggle("active");
    });

    // Typing text animation script
    function typeAnimation(element, strings) {
        var currentStringIndex = 0;
        var typingSpeed = 100;
        var backspacingSpeed = 60;

        function type() {
            if (currentStringIndex < strings.length) {
                if (element.textContent !== strings[currentStringIndex]) {
                    element.textContent += strings[currentStringIndex].charAt(0);
                    setTimeout(type, typingSpeed);
                } else {
                    setTimeout(backspace, 1000);
                }
            }
        }

        function backspace() {
            if (element.textContent.length > 0) {
                element.textContent = element.textContent.slice(0, -1);
                setTimeout(backspace, backspacingSpeed);
            } else {
                currentStringIndex = (currentStringIndex + 1) % strings.length;
                setTimeout(type, 500);
            }
        }

        type();
    }

    typeAnimation(document.querySelector(".typing"), ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"]);
    typeAnimation(document.querySelector(".typing-2"), ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"]);

    // Owl carousel script (Simplified, without jQuery)
    var carousel = document.querySelector('.carousel');
    var currentIndex = 0;

    function updateCarousel() {
        var windowWidth = window.innerWidth;
        var margin = windowWidth < 600 ? 20 : 40;

        carousel.style.transform = 'translateX(' + (-currentIndex * (items[0].offsetWidth + margin)) + 'px)';
    }

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});
