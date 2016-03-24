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
      //Diagram states
      .state('chest', {
        url: '/diagram/chest',
        templateUrl: './views/muscles/chest.html',
        controller: 'diagramCtrl'
      })
      .state('front-deltoids', {
        url: '/diagram/frontdeltoids',
        templateUrl: './views/muscles/frontdeltoids.html',
        controller: 'diagramCtrl'
      })
      .state('rear-deltoids', {
        url: '/diagram/reardeltoids',
        templateUrl: './views/muscles/reardeltoids.html',
        controller: 'diagramCtrl'
      })
      .state('abdominals', {
        url: '/diagram/abdominals',
        templateUrl: './views/muscles/abdominals.html',
        controller: 'diagramCtrl'
      })
      .state('obliques', {
        url: '/diagram/obliques',
        templateUrl: './views/muscles/obliques.html',
        controller: 'diagramCtrl'
      })
      .state('quads', {
        url: '/diagram/quads',
        templateUrl: './views/muscles/quads.html',
        controller: 'diagramCtrl'
      })
      .state('hips', {
        url: '/diagram/hips',
        templateUrl: './views/muscles/hips.html',
        controller: 'diagramCtrl'
      })
      .state('biceps', {
        url: '/diagram/biceps',
        templateUrl: './views/muscles/biceps.html',
        controller: 'diagramCtrl'
      })
      .state('forearms', {
        url: '/diagram/forearms',
        templateUrl: './views/muscles/forearms.html',
        controller: 'diagramCtrl'
      })
      .state('traps', {
        url: '/diagram/traps',
        templateUrl: './views/muscles/traps.html',
        controller: 'diagramCtrl'
      })
      .state('triceps', {
        url: '/diagram/triceps',
        templateUrl: './views/muscles/triceps.html',
        controller: 'diagramCtrl'
      })
      .state('lats', {
        url: '/diagram/lats',
        templateUrl: './views/muscles/lats.html',
        controller: 'diagramCtrl'
      })
      .state('lower-back', {
        url: '/diagram/lowerback',
        templateUrl: './views/muscles/lowerback.html',
        controller: 'diagramCtrl'
      })
      .state('glutes', {
        url: '/diagram/glutes',
        templateUrl: './views/muscles/glutes.html',
        controller: 'diagramCtrl'
      })
      .state('hamstrings', {
        url: '/diagram/hamstrings',
        templateUrl: './views/muscles/hamstrings.html',
        controller: 'diagramCtrl'
      })
      .state('calves', {
        url: '/diagram/calves',
        templateUrl: './views/muscles/calves.html',
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
    .state('signup', {
      url: '/signup',
      templateUrl: './views/signup.html',
      controller: 'userCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/login.html',
      controller: 'userCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: './views/admin.html',
      controller: 'diagramCtrl'
    })


  $urlRouterProvider.otherwise('/');


})
