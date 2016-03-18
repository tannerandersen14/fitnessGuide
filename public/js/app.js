angular.module('fitnessGuide', ['ui.router'])

angular.module('fitnessGuide').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'homeCtrl'
    })
    .state('diagram', {
      url: '/diagram',
      templateUrl: './views/diagram.html',
      controller: 'diagramCtrl'
    })
    .state('user', {
      url: '/user',
      templateUrl: './views/user.html',
      controller: 'userCtrl'
    })
    .state('gyms', {
      url: '/gyms',
      templateUrl: './views/gyms.html',
      controller: 'gymsCtrl'
    })

  $urlRouterProvider.otherwise('/');


})
