'use strict';

function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes is a required parameter';
        }
        this.construct(routes);
        this.init();
    } catch (e) {
        console.error(e);
    }
}

Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },
    init: function () {
        var r = this.routes;
        (function (scope, r){
            
        })
    }
}