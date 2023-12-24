document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    var scrollUpBtn = document.querySelector('.scroll-up-btn');
    var menuBtn = document.querySelector('.menu-btn');
    var menuItems = document.querySelectorAll('.navbar .menu li a');
    
    window.addEventListener("scroll", function () {
        // Sticky navbar on scroll
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        // Scroll-up button show/hide
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
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
    var typeAnimation = function (element, strings) {
        var currentStringIndex = 0;
        var currentString = strings[currentStringIndex];
        var typingSpeed = 100;
        var backspacingSpeed = 60;

        var type = function () {
            if (currentStringIndex < strings.length) {
                if (element.textContent !== currentString) {
                    element.textContent += currentString.charAt(0);
                    setTimeout(type, typingSpeed);
                } else {
                    setTimeout(backspace, 1000);
                }
            }
        };

        var backspace = function () {
            if (element.textContent.length > 0) {
                element.textContent = element.textContent.slice(0, -1);
                setTimeout(backspace, backspacingSpeed);
            } else {
                currentStringIndex = (currentStringIndex + 1) % strings.length;
                currentString = strings[currentStringIndex];
                setTimeout(type, 500);
            }
        };

        type();
    };

    typeAnimation(document.querySelector(".typing"), ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"]);
    typeAnimation(document.querySelector(".typing-2"), ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"]);

    // Owl carousel script (Simplified, without jQuery)
    var carousel = document.querySelector('.carousel');
    var items = document.querySelectorAll('.carousel .item');
    var margin = 20;
    var currentIndex = 0;

    function updateCarousel() {
        var windowWidth = window.innerWidth;

        if (windowWidth < 600) {
            carousel.style.transform = 'translateX(' + (-currentIndex * (items[0].offsetWidth + margin)) + 'px)';
        } else {
            carousel.style.transform = 'translateX(' + (-currentIndex * (items[0].offsetWidth + margin * 2)) + 'px)';
        }
    }

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});
