(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '0px');
        }  /*else {
            $('.sticky-top').removeClass(' shadow-sm').css('top', '-150px');
        } */
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.nav-blue').addClass('text-primary ').css('top', '0px');
        } else {
            $('.nav-blue').removeClass(' shadow-sm').css('top', '-150px');
        }
    });

    
    
   
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);

//typing effect

/*document.addEventListener("DOMContentLoaded", function() {
    const text = "Your Future-Proof Web 3.0 Government OS";
    const typingSpeed = 150; // Speed in milliseconds

    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("header-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();
});*/



document.addEventListener("DOMContentLoaded", function() {
    const headers = [
        {text: "Market Nexus: Unleash Your Global B2B Trade With Our “Trade-as-a-Service” Platform.", subtext: `Frictionless Web 3.0 Driven Multi-Tiered Trade Like Never Before.`},
        {text: "Eliminate Friction, Gain Visibility: \nThe Future of Global Trade is Here.", subtext: "Automate & Track Every Step: AI-Powered Autonomous B2B Trade & Operations Orchestration."},
        {text: "See Everything, Control Everything: Unparalleled Trade Transparency.", subtext: "Physical, Financial, Regulatory and ESG Dimensions - \nTrack It All with Market Nexus."},
       
    ];

    let headerIndex = 0;
    const typingSpeed = 75; // Speed in milliseconds
    const pauseBetweenHeaders = 3000; // Pause between headers in milliseconds
    const subtextDelay = 1000; // Delay before showing subtext in milliseconds

    function typeWriter(text, element, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, typingSpeed);
            } else {
                element.classList.add('blink-caret');
                callback();
            }
        }
        element.innerHTML = '';
        element.classList.remove('blink-caret');
        type();
    }

    function showNextHeader() {
        if (headerIndex >= headers.length) {
            headerIndex = 0;
        }

        const headerElement = document.getElementById('header-text');
        const subtextElement = document.getElementById('subtext');
        const currentHeader = headers[headerIndex];

        headerElement.innerHTML = '';
        subtextElement.innerHTML = '';
        subtextElement.classList.remove('fade-in');

        typeWriter(currentHeader.text, headerElement, function() {
            setTimeout(function() {
                subtextElement.innerHTML = currentHeader.subtext;
                subtextElement.classList.add('fade-in');
                setTimeout(function() {
                    subtextElement.classList.remove('fade-in');
                    headerIndex++;
                    setTimeout(showNextHeader, pauseBetweenHeaders);
                }, pauseBetweenHeaders - subtextDelay);
            }, subtextDelay);
        });
    }

    showNextHeader();
});

/*Video Hover
document.querySelectorAll('.hover-video').forEach(video => {
    video.addEventListener('mouseover', function() {
        this.play();
    });
    video.addEventListener('mouseout', function() {
        this.pause();
        this.currentTime = 0; // Reset video to the beginning when hover ends
    });
});
*/

document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll("video.hover-video");
    var currentIndex = 0;

    function playNextVideo() {
        videos[currentIndex].play();
        videos[currentIndex].addEventListener('ended', function() {
            currentIndex = (currentIndex + 1) % videos.length;
            playNextVideo();
        }, { once: true });
    }

    playNextVideo();
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const menuItems = document.querySelectorAll('.nav-links li a');

    function toggleMenu() {
        navLinks.classList.toggle('open');
    }

    function closeMenu() {
        navLinks.classList.remove('open');
    }

    hamburgerMenu.addEventListener('click', toggleMenu);

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            closeMenu();
        });

    });
    

    document.addEventListener('mousedown', function(event) {
        // Check if the clicked target is outside .nav-links and .hamburger-menu
        if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            closeMenu();
        }
    });


   
});





