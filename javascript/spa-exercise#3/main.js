document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('content');

    function loadContent(page) {
        switch (page) {
            case 'home':
                contentDiv.innerHTML = '<h2>Home</h2><p>Welcome to the home page!</p>';
                break;
            case 'about':
                contentDiv.innerHTML = '<h2>About</h2><p>Learn more about us on this page.</p>';
                break;
            case 'contact':
                contentDiv.innerHTML = '<h2>Contact</h2><p>Get in touch with us!</p>';
                break;
            default:
                contentDiv.innerHTML = '<h2>404 Not Found</h2><p>Page not found.</p>';
        }
    }

    document.getElementById('home').addEventListener('click', function (e) {
        e.preventDefault();
        loadContent('home');
    });

    document.getElementById('about').addEventListener('click', function (e) {
        e.preventDefault();
        loadContent('about');
    });

    document.getElementById('contact').addEventListener('click', function (e) {
        e.preventDefault();
        loadContent('contact');
    });
    loadContent('home'); 
});