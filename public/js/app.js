angular.module('fitnessGuide', ['ui.router'])

angular.module('fitnessGuide').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './views/home.html',
      controller: 'homeCtrl',
      access: {restricted: false}
    })
    .state('diagram', {
      url: '/diagram',
      templateUrl: './views/diagram.html',
      controller: 'diagramCtrl',
      access: {restricted: false}
    })
      //Diagram states
      .state('chest', {
        url: '/diagram/chest',
        templateUrl: './views/muscles/chest.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('front-deltoids', {
        url: '/diagram/frontdeltoids',
        templateUrl: './views/muscles/frontdeltoids.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('rear-deltoids', {
        url: '/diagram/reardeltoids',
        templateUrl: './views/muscles/reardeltoids.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('abdominals', {
        url: '/diagram/abdominals',
        templateUrl: './views/muscles/abdominals.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('obliques', {
        url: '/diagram/obliques',
        templateUrl: './views/muscles/obliques.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('quads', {
        url: '/diagram/quads',
        templateUrl: './views/muscles/quads.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('hips', {
        url: '/diagram/hips',
        templateUrl: './views/muscles/hips.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('biceps', {
        url: '/diagram/biceps',
        templateUrl: './views/muscles/biceps.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('forearms', {
        url: '/diagram/forearms',
        templateUrl: './views/muscles/forearms.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('traps', {
        url: '/diagram/traps',
        templateUrl: './views/muscles/traps.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('triceps', {
        url: '/diagram/triceps',
        templateUrl: './views/muscles/triceps.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('lats', {
        url: '/diagram/lats',
        templateUrl: './views/muscles/lats.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('lower-back', {
        url: '/diagram/lowerback',
        templateUrl: './views/muscles/lowerback.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('glutes', {
        url: '/diagram/glutes',
        templateUrl: './views/muscles/glutes.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('hamstrings', {
        url: '/diagram/hamstrings',
        templateUrl: './views/muscles/hamstrings.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })
      .state('calves', {
        url: '/diagram/calves',
        templateUrl: './views/muscles/calves.html',
        controller: 'diagramCtrl',
        access: {restricted: false}
      })


    .state('user', {
      url: '/user',
      templateUrl: './views/user.html',
      controller: 'loginController',
      access: {restricted: true}
    })
    .state('gyms', {
      url: '/gyms',
      templateUrl: './views/gyms.html',
      controller: 'gymsCtrl',
      access: {restricted: false}
    })
    .state('signup', {
      url: '/signup',
      templateUrl: './views/signup.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .state('login', {
      url: '/login',
      templateUrl: './views/login.html',
     controller: 'loginController',
     access: {restricted: false}
    })
    .state('admin', {
      url: '/admin',
      templateUrl: './views/admin.html',
      controller: 'diagramCtrl',
      access: {restricted: true},
      resolve: {
        security: ['$q', 'mainService', function($q, mainService) {
          if (mainService.currentUser.admin === false) {
            return $q.reject('Not Authorized');
          }
        }]
      }
    })
    .state('sunday', {
      url: '/user/sunday',
      templateUrl: './views/days/sunday.html',
      controller: 'loginController',
      access: {restricted: true}
    })
    .state('monday', {
      url: '/user/monday',
      templateUrl: './views/days/monday.html',
      controller: 'loginController',
      access: {restricted: true}
    })
    .state('tuesday', {
      url: '/user/tuesday',
      templateUrl: './views/days/tuesday.html',
      controller: 'loginController',
      access: {restricted: true}
    })
    .state('wednesday', {
      url: '/user/wednesday',
      templateUrl: './views/days/wednesday.html',
      controller: 'loginController',
      access: {restricted: true}
    })
    .state('thursday', {
      url: '/user/thursday',
      templateUrl: './views/days/thursday.html',
      controller: 'loginController',
      access: {restricted: true}
    })
    .state('friday', {
      url: '/user/friday',
      templateUrl: './views/days/friday.html',
      controller: 'loginController',
      access: {restricted: true}
    })
    .state('saturday', {
      url: '/user/saturday',
      templateUrl: './views/days/saturday.html',
      controller: 'loginController',
      access: {restricted: true}
    })


  $urlRouterProvider.otherwise('/');
})

angular.module('fitnessGuide').run(function ($state, $rootScope, $location, AuthService) {
  $rootScope.$on('$stateChangeStart',
    function (event, next, current) {
      AuthService.getUserStatus();
      if (next.access.restricted &&
          !AuthService.isLoggedIn()) {
            event.preventDefault();
            $state.go('login')
      }
  });
});
