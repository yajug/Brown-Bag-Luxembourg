angular
    .module('baggercatApp')

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('main', {
                abstract: true,
                templateUrl: 'main.html'
            })
            .state('main.home',{
                url: '/home',
                templateUrl: 'home.html'
            })
            .state('main.speaker', {
                url: '/speakers',
                templateUrl: 'speakers.html'
            })
    });