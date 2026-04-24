'use strict';

(function () {
    function init () {
        var router = new Router([
            new Router('home', 'home.html', true),
            new Router('about', 'about.html')
            
        ]);
    }
    init();
}());