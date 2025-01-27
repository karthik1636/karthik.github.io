document.addEventListener("DOMContentLoaded", function() {
    var sidenav = document.getElementById("mySidenav");
    var openNavButton = document.querySelector("span"); // Assuming the toggle button is a <span>

    function openNav() {
        sidenav.style.width = "250px";
        // Set timeout to automatically close the nav after 3 seconds
        sidenav.timeout = setTimeout(function() {
            sidenav.style.width = "0";
        }, 3000);
    }

    function closeNav() {
        clearTimeout(sidenav.timeout);
        sidenav.style.width = "0";
    }

    function toggleNav() {
        var currentWidth = sidenav.style.width;
        // Check if nav is already open
        if (currentWidth === "250px") {
            closeNav();
        } else {
            openNav();
        }
    }

    // Event listener for opening the navigation
    openNavButton.addEventListener("click", function(event) {
        toggleNav();
        event.stopPropagation(); // Prevents the click from propagating to the document
    });

    // Prevent clicks inside the sidenav from closing it
    sidenav.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    // Event listeners to handle mouse enter and leave for hover state management
    sidenav.addEventListener("mouseenter", function() {
        // Cancel any pending auto-close when the mouse enters the sidenav
        clearTimeout(sidenav.timeout);
    });

    sidenav.addEventListener("mouseleave", function() {
        // Set auto-close when the mouse leaves the sidenav
        sidenav.timeout = setTimeout(function() {
            sidenav.style.width = "0";
        }, 500); // Short delay to close after mouse leaves, adjust as needed
    });

    // Close the nav when clicking anywhere else on the page
    document.addEventListener("click", function(event) {
        if (event.target !== openNavButton) {
            closeNav();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interactive hover effect for sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)'; // Darker shadow on hover
        });
        section.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)'; // Return to normal shadow
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            // Applying a softer, more spread-out shadow on hover
            this.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)';
            this.style.transform = 'translateY(-2px)'; // Slightly raise the section
            this.style.transition = 'box-shadow 0.3s ease-out, transform 0.3s ease-out';
        });
        section.addEventListener('mouseleave', function() {
            // Return to almost no shadow when not hovering
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
            this.style.transform = 'translateY(0)'; // Return to normal position
            this.style.transition = 'box-shadow 0.3s ease-in, transform 0.3s ease-in';
        });
    });
});

