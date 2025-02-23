document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMobile = document.querySelector('.nav-mobile');
    const menuLinks = document.querySelectorAll('.nav-mobile .nav-button');

    // Toggle menu
    mobileMenuButton?.addEventListener('click', function() {
        mobileMenuButton.classList.toggle('active');
        navMobile.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Verifica se o link é para uma página externa antes de aplicar a lógica do menu
            if (!this.getAttribute('href').startsWith('http') && !this.getAttribute('href').includes('.html')) {
                mobileMenuButton.classList.remove('active');
                navMobile.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });
});