angular.module('fitnessGuide').controller('diagramCtrl', function($scope, $state, mainService, liftService, AuthService) {

  $scope.userLogged = AuthService.isLoggedIn();
  $scope.newLift = {};
  $scope.abdominalLifts = liftService.abdominalLifts;
  $scope.bicepLifts = liftService.bicepLifts;
  $scope.calfLifts = liftService.calfLifts;
  $scope.chestLifts = liftService.chestLifts;
  $scope.forearmLifts = liftService.forearmLifts;
  $scope.frontDeltoidLifts = liftService.frontDeltoidLifts;
  $scope.gluteLifts = liftService.gluteLifts;
  $scope.hamstringLifts = liftService.hamstringLifts;
  $scope.hipLifts = liftService.hipLifts;
  $scope.latLifts = liftService.latLifts;
  $scope.lowerbackLifts = liftService.lowerbackLifts;
  $scope.obliqueLifts = liftService.obliqueLifts;
  $scope.quadLifts = liftService.quadLifts;
  $scope.rearDeltoidLifts = liftService.rearDeltoidLifts;
  $scope.trapLifts = liftService.trapLifts;
  $scope.tricepLifts = liftService.tricepLifts;
  $scope.lifts = [];
  $scope.newLift = {};
  $scope.newLift.link = '';
  $scope.newLift.image = '';
  $scope.newLift.directions = [];
  $scope.admin = mainService.admin;
  $scope.templateLifts = mainService.templateLifts;
  $scope.directions = mainService.directions;
  $scope.$watch($scope.directions);
  $scope.liftDay = {};
  
  $scope.consoleLift = function(lift) {
    console.log(lift);
  };

  $scope.getTemplateLift = function() {
    mainService.getTemplateLift().then(function(response) {
      mainService.templateLifts = response.data;
      console.log(response.data)
    })
  }
  $scope.getTemplateLift();

  $scope.deleteTemplateLift = function(id) {
    mainService.deleteTemplateLift(id).then(function(response) {
      for (var i = 0; i < $scope.templateLifts.length; i++) {
        if ($scope.templateLifts[i]._id === id) {
          $scope.templateLifts.splice(i, 1);
        }
      }
    })
    for (var x = 0; x < mainService.currentUser.templateLifts.length; x++) {
      if (id === mainService.currentUser.templateLifts[x]) {
        mainService.currentUser.templateLifts.splice(x, 1);
        mainService.updateUser();
      }
    }
  }

  $scope.addToTemplate = function(data) {
    mainService.newTemplateLift.lifts.push(data);
    $scope.newLift = {};
  }

  $scope.removeDup = function(arr) {
    arr.sort()
    for (var x = 0; x < arr.length; x++) {
      for (var y = x + 1; y < arr.length; y++) {
        if (arr[x].name === arr[y].name) {
          arr.splice(x, 1);
        }
      }
    }
    return arr;
  }

  $scope.checkForAdmin = function() {
    if (mainService.currentUser.admin === false) {
      return false;
    } else {
      return true;
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

  $scope.addUserLift = function(lift) {
      if ($scope.liftDay.day === 'sunday') {
      mainService.currentUser.sundayLifts.push(lift);
      console.log(mainService.currentUser)
      mainService.addUserLift().then(function(response) {
        console.log('okay');
        $scope.newLift = {};
        $scope.liftDay = {};
      })
    }
      else if ($scope.liftDay.day === 'monday') {
      mainService.currentUser.mondayLifts.push(lift);
      console.log(mainService.currentUser)
      mainService.addUserLift().then(function(response) {
        console.log('okay');
        $scope.newLift = {};
        $scope.liftDay = {};
      })
    }
      else if ($scope.liftDay.day === 'tuesday') {
      mainService.currentUser.tuesdayLifts.push(lift);
      console.log(mainService.currentUser)
      mainService.addUserLift().then(function(response) {
        console.log('okay');
        $scope.newLift = {};
        $scope.liftDay = {};
      })
    }
      else if ($scope.liftDay.day === 'wednesday') {
      mainService.currentUser.wednesdayLifts.push(lift);
      console.log(mainService.currentUser)
      mainService.addUserLift().then(function(response) {
        console.log('okay');
        $scope.newLift = {};
        $scope.liftDay = {};
      })
    }
      else if ($scope.liftDay.day === 'thursday') {
      mainService.currentUser.thursdayLifts.push(lift);
      console.log(mainService.currentUser)
      mainService.addUserLift().then(function(response) {
        console.log('okay');
        $scope.newLift = {};
        $scope.liftDay = {};
      })
    }
      else if ($scope.liftDay.day === 'friday') {
      mainService.currentUser.fridayLifts.push(lift);
      console.log(mainService.currentUser)
      mainService.addUserLift().then(function(response) {
        console.log('okay');
        $scope.newLift = {};
        $scope.liftDay = {};
      })
    }
      else if ($scope.liftDay.day === 'saturday') {
      mainService.currentUser.saturdayLifts.push(lift);
      console.log(mainService.currentUser)
      mainService.addUserLift().then(function(response) {
        console.log('okay');
        $scope.newLift = {};
        $scope.liftDay = {};
      })
    } else if ($scope.liftDay.day === '') {
      alert('Please select a day');
    }
  }

  $scope.isLoggedIn = AuthService.isLoggedIn;
  $scope.isLoggedIn();

  $scope.deleteLift = function(id) {
    mainService.deleteLift(id).then(function(response) {
      $scope.lifts = [];
      $scope.getLifts();
    })
  }

  $scope.addLift = function() {
    mainService.addLift($scope.newLift).then(function(response) {
      $scope.getLifts();
      console.log($scope.newLift)
      $scope.newLift = {};
      $scope.newLift.link = '';
      $scope.newLift.image = '';
      $scope.newLift.directions = [];

    })
  }

  $scope.getSpecificLift = function(name) {
    mainService.getSpecificLift(name).then(function(response) {
      $scope.specificLift = response.data;
    })
  }

  $scope.getLifts = function() {
    mainService.getLifts().then(function(response) {
      $scope.lifts = response.data;
      for (var i = 0; i < $scope.lifts.length; i++) {
        $scope.lifts[i].image = $scope.lifts[i].image.split('/').pop();
        if ($scope.lifts[i].type === "abdominal") {
          liftService.abdominalLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.abdominalLifts)
        } else if ($scope.lifts[i].type === "bicep") {
          liftService.bicepLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.bicepLifts)
        } else if ($scope.lifts[i].type === "calf") {
          liftService.calfLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.calfLifts)
        } else if ($scope.lifts[i].type === "chest") {
          liftService.chestLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.chestLifts)
        } else if ($scope.lifts[i].type === "forearm") {
          liftService.forearmLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.forearmLifts)
        } else if ($scope.lifts[i].type === "frontdeltoid") {
          liftService.frontDeltoidLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.frontDeltoidLifts)
        } else if ($scope.lifts[i].type === "glute") {
          liftService.gluteLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.gluteLifts)
        } else if ($scope.lifts[i].type === "hamstring") {
          liftService.hamstringLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.hamstringLifts)
        } else if ($scope.lifts[i].type === "hip") {
          liftService.hipLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.hipLifts)
        } else if ($scope.lifts[i].type === "lat") {
          liftService.latLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.latLifts)
        } else if ($scope.lifts[i].type === "lowerback") {
          liftService.lowerbackLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.lowerbackLifts)
        } else if ($scope.lifts[i].type === "oblique") {
          liftService.obliqueLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.obliqueLifts)
        } else if ($scope.lifts[i].type === "quad") {
          liftService.quadLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.quadLifts)
        } else if ($scope.lifts[i].type === "reardeltoid") {
          liftService.rearDeltoidLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.rearDeltoidLifts)
        } else if ($scope.lifts[i].type === "trap") {
          liftService.trapLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.trapLifts)
        } else if ($scope.lifts[i].type === "tricep") {
          liftService.tricepLifts.push($scope.lifts[i]);
          $scope.removeDup(liftService.tricepLifts)
        } else {
          console.log("Awww poopies");
        }
      }
    })
  }
  $scope.getLifts();

})
