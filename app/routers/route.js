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
            }).state('sobre', {
                url: '/sobre',
                templateUrl: 'app/sobre/sobre.html',
            }).state('contatos', {
                url: '/contatos',
                templateUrl: 'app/contatos/contatos.html'
            }).state('projetos', {
                url: '/projetos',
                templateUrl: 'app/projetos/projetos.html',
            }).state('queroajudar', {
                url: '/quero-ajudar',
                templateUrl: 'app/queroajudar/quero-ajudar.html',
            }).state('dancandopelavida', {
                url: '/dancando-pela-vida',
                templateUrl: 'app/projetos/conteudo/dancando-pela-vida.html',
            }).state('amigosdavida', {
                url: '/amigos-da-vida',
                templateUrl: 'app/projetos/conteudo/amigos-da-vida.html',
            });

        $urlRouterProvider.otherwise('/');
    }
})();