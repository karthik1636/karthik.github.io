window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.opacity = (100 - window.pageYOffset / 3) + '%';
});
