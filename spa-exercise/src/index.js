function getHomePage() {
    return '<h1>welcome Home</h1><p>ini adalah spa pertama gua</p>';
}

function getAboutPage() {
    return '<h1>About Us</h1><p>ini adalah halaman tentang kami</p>';
}

function getContactPage() {
    return '<h1>Contact Us</h1><p>ini adalah halaman kontak kami</p>';
}

const routes = {
    '#/': getHomePage,
    '#/about': getAboutPage,
    '#/contact': getContactPage
}

function handleRoute() {
    const hash = window.location.hash || '#/';
    const content = routes[hash] ? routes[hash]() : '<h1>404 Not Found</h1>';
    document.getElementById('app').innerHTML = content;
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);