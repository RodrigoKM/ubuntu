(function () {
    'use strict';

    angular
        .module('app')
        .config(configRoutes);

    configRoutes.$inject = ['$stateProvider', '$urlRouterProvider']
    function configRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                //controller: 'HomeController',
                //controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    }
})();