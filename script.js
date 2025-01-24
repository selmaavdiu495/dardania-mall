document.addEventListener('DOMContentLoaded', function() {
    var loginModal = new bootstrap.Modal(document.getElementById('login-modal'));
    var signupModal = new bootstrap.Modal(document.getElementById('signup-modal'));

    document.getElementById('login-link').addEventListener('click', function() {
        loginModal.show();
    });

    document.getElementById('signup-link').addEventListener('click', function() {
        signupModal.show();
    });

    document.getElementById('login-button').addEventListener('click', function() {
        loginModal.show();
    });

    document.getElementById('signup-button').addEventListener('click', function() {
        signupModal.show();
    });

    document.getElementById('order-button').addEventListener('click', function() {
        // Kontrolloni nëse përdoruesi është i loguar
        const isLoggedIn = false; // Kjo duhet të zëvendësohet me logjikën aktuale të kontrollit të hyrjes

        if (!isLoggedIn) {
            // Nëse përdoruesi nuk është i loguar, ridrejtoje në faqen e hyrjes
            window.location.href = 'login.html';
        } else {
            // Logjika për të porositur diçka
            alert('Ju jeni loguar dhe mund të porosisni.');
        }
    });
});
window.addEventListener('scroll', function () {
    const header = document.querySelector('#header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
