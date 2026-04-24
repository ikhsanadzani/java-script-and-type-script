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

const state = {
    users: [],
    currentPage: 'home',
    isLoading: true
};

function updateState(newState) {
    Object.assign(state, newState);
    renderContent();
}

function renderContent() {
    const appDiv = document.getElementById('app');
    if (state.isLoading) {
        appDiv.innerHTML = '<p>Loading...</p>';
        return;
    } 
    appDiv.innerHTML = routes[window.location.hash || '#/']();
}

function setupEventListeners() {
    document.getElementById('app').addEventListener('click', function(event) {
        if (event.target.matches('.button-submit')) {
            handleSubmit(event);
        }
        if (event.target.matches('.toggle-menu')) {
            toggleMenu(event);
        }
    });
}

function handleSubmit(event) {
    event.preventDefault();
    updateState({ isLoading: true });
}

function toggleMenu(event) {
    document.querySelector('.menu').classList.toggle('active');
}