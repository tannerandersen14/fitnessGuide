angular.module('fitnessGuide').controller('loginController',
  ['$state', '$scope', '$location', 'AuthService', 'mainService',
  function ($state, $scope, $location, AuthService, mainService) {

    $scope.adminPassword = '';
    $scope.currentUser = mainService.currentUser;
    $scope.currentTemplate = mainService.newTemplateLift;
    $scope.$watch($scope.currentUser)
    $scope.isLoggedIn = AuthService.isLoggedIn;
    $scope.directions = mainService.directions;
    $scope.userPageUser = mainService.userPageUser;
    $scope.liftDay = {};


    $scope.addTemplateToUserLift = function(lift) {
        if ($scope.liftDay.day === 'sunday') {
          for (var i = 0; i < lift.length; i++) {
            mainService.currentUser.sundayLifts.push(lift[i]);
          }
        console.log(mainService.currentUser)
        mainService.addUserLift().then(function(response) {
          console.log('okay');
          $scope.liftDay = {};
        })
      }
        else if ($scope.liftDay.day === 'monday') {
          for (var i = 0; i < lift.length; i++) {
            mainService.currentUser.mondayLifts.push(lift[i]);
          }
        console.log(mainService.currentUser)
        mainService.addUserLift().then(function(response) {
          console.log('okay');
          $scope.liftDay = {};
        })
      }
        else if ($scope.liftDay.day === 'tuesday') {
          for (var i = 0; i < lift.length; i++) {
            mainService.currentUser.tuesdayLifts.push(lift[i]);
          }
        console.log(mainService.currentUser)
        mainService.addUserLift().then(function(response) {
          console.log('okay');
          $scope.liftDay = {};
        })
      }
        else if ($scope.liftDay.day === 'wednesday') {
          for (var i = 0; i < lift.length; i++) {
            mainService.currentUser.wednesdayLifts.push(lift[i]);
          }
        console.log(mainService.currentUser)
        mainService.addUserLift().then(function(response) {
          console.log('okay');
          $scope.liftDay = {};
        })
      }
        else if ($scope.liftDay.day === 'thursday') {
          for (var i = 0; i < lift.length; i++) {
            mainService.currentUser.thursdayLifts.push(lift[i]);
          }
        console.log(mainService.currentUser)
        mainService.addUserLift().then(function(response) {
          console.log('okay');
          $scope.liftDay = {};
        })
      }
        else if ($scope.liftDay.day === 'friday') {
          for (var i = 0; i < lift.length; i++) {
            mainService.currentUser.fridayLifts.push(lift[i]);
          }
        console.log(mainService.currentUser)
        mainService.addUserLift().then(function(response) {
          console.log('okay');
          $scope.liftDay = {};
        })
      }
        else if ($scope.liftDay.day === 'saturday') {
          for (var i = 0; i < lift.length; i++) {
            mainService.currentUser.saturdayLifts.push(lift[i]);
          }
        console.log(mainService.currentUser)
        mainService.addUserLift().then(function(response) {
          console.log('okay');
          $scope.liftDay = {};
        })
      } else if ($scope.liftDay.day === '') {
        alert('Please select a day');
      }
    }

    $scope.deleteTemplateLift = function(id) {
      mainService.deleteTemplateLift(id).then(function(response) {
        for (var i = 0; i < $scope.userPageUser.templateLifts.length; i++) {
          if ($scope.userPageUser.templateLifts[i]._id === id) {
            $scope.userPageUser.templateLifts.splice(i, 1);
          }
        }
      })
      for (var x = 0; x < mainService.currentUser.templateLifts.length; x++) {
        if (id === mainService.currentUser.templateLifts[x]) {
          mainService.currentUser.templateLifts.splice(x, 1);
          mainService.updateUser();
          mainService.getUser();
        }
      }
    }

    $scope.showDirections = function() {
      if (mainService.directions === false) {
        mainService.directions = true;
        $state.reload();
        console.log(mainService.directions)
      } else {
        mainService.directions = false;
        $state.reload();
        console.log(mainService.directions)
      }
    }

    $scope.getUser = function() {
      mainService.getUser().then(function(response){
        mainService.userPageUser = response.data;
        console.log(response.data);
        $state.reload();
      })
    }

    $scope.makeUserAdmin = function() {
      mainService.makeUserAdmin().then(function(response) {
        if ($scope.adminPassword === response.data[0].password) {
          mainService.currentUser.admin = true;
          mainService.updateUserAdmin();
          $scope.adminPassword = '';
          alert('Adminified');
        } else {
          alert("Wrong Password")
        }
      })
    }

    $scope.clearTemplate = function() {
      mainService.newTemplateLift.lifts.splice(0, mainService.newTemplateLift.lifts.length);
    }

    $scope.addTemplateList = function() {
      mainService.newTemplateLift.user.push(mainService.currentUser._id);
      mainService.addTemplateLift().then(function(response) {
        console.log(mainService.currentUser)
        mainService.currentUser.templateLifts.push(response.data._id)
        console.log(mainService.currentUser)
        mainService.updateUser();
        $scope.clearTemplate();
        mainService.newTemplateLift.templateName = '';
        mainService.newTemplateLift.user = [];
        $scope.getUser();
      });
    };

    $scope.checkForTemplate = function() {
      mainService.checkForTemplate();
    }

    $scope.removeTemplateLift = function(lift) {
      for (var i = 0; i < mainService.newTemplateLift.lifts.length; i++) {
        if (lift === mainService.newTemplateLift.lifts[i]) {
          mainService.newTemplateLift.lifts.splice(i, 1);
        }
      }
    }

    $scope.removeUserSundayLift = function(lift) {
      for (var i = 0; i < mainService.currentUser.sundayLifts.length; i++) {
        if (lift === mainService.currentUser.sundayLifts[i]) {
          mainService.currentUser.sundayLifts.splice(i, 1)
        }
      }
      mainService.removeUserLift().then(function(response) {
      })
    }
    $scope.removeUserMondayLift = function(lift) {
      for (var i = 0; i < mainService.currentUser.mondayLifts.length; i++) {
        if (lift === mainService.currentUser.mondayLifts[i]) {
          mainService.currentUser.mondayLifts.splice(i, 1)
        }
      }
      mainService.removeUserLift().then(function(response) {
      })
    }
    $scope.removeUserTuesdayLift = function(lift) {
      for (var i = 0; i < mainService.currentUser.tuesdayLifts.length; i++) {
        if (lift === mainService.currentUser.tuesdayLifts[i]) {
          mainService.currentUser.tuesdayLifts.splice(i, 1)
        }
      }
      mainService.removeUserLift().then(function(response) {
      })
    }
    $scope.removeUserWednesdayLift = function(lift) {
      for (var i = 0; i < mainService.currentUser.wednesdayLifts.length; i++) {
        if (lift === mainService.currentUser.wednesdayLifts[i]) {
          mainService.currentUser.wednesdayLifts.splice(i, 1)
        }
      }
      mainService.removeUserLift().then(function(response) {
      })
    }
    $scope.removeUserThursdayLift = function(lift) {
      for (var i = 0; i < mainService.currentUser.thursdayLifts.length; i++) {
        if (lift === mainService.currentUser.thursdayLifts[i]) {
          mainService.currentUser.thursdayLifts.splice(i, 1)
        }
      }
      mainService.removeUserLift().then(function(response) {
      })
    }
    $scope.removeUserFridayLift = function(lift) {
      for (var i = 0; i < mainService.currentUser.fridayLifts.length; i++) {
        if (lift === mainService.currentUser.fridayLifts[i]) {
          mainService.currentUser.fridayLifts.splice(i, 1)
        }
      }
      mainService.removeUserLift().then(function(response) {
      })
    }
    $scope.removeUserSaturdayLift = function(lift) {
      for (var i = 0; i < mainService.currentUser.saturdayLifts.length; i++) {
        if (lift === mainService.currentUser.saturdayLifts[i]) {
          mainService.currentUser.saturdayLifts.splice(i, 1)
        }
      }
      mainService.removeUserLift().then(function(response) {
      })
    }

    $scope.login = function () {
      $scope.error = false;
      $scope.disabled = true;

      AuthService.login($scope.loginForm.username, $scope.loginForm.password)
        .then(function (response) {
          $state.go('user')
          mainService.currentUser = response;
          $scope.disabled = false;
          $scope.loginForm = {};
          mainService.checkForAdmin();
          AuthService.isLoggedIn();
          $scope.getUser();
        })
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });
    };
}]);
angular.module('fitnessGuide').controller('logoutController',
  ['$scope', '$location', 'AuthService', 'mainService',
  function ($scope, $location, AuthService, mainService) {

    $scope.userLogged = AuthService.isLoggedIn();
    $scope.$watch($scope.userLogged);

    $scope.logout = function () {
      AuthService.logout()
        .then(function () {
          mainService.currentUser = {};
          $location.path('login');
        });
        console.log('logout')

    };

}]);
angular.module('fitnessGuide').controller('registerController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.register = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call register from service
      AuthService.register($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function () {
          $location.path('login')
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });

    };

}]);
