angular.module('fitnessGuide').controller('diagramCtrl', function($scope, mainService, liftService) {

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

  $scope.getLifts = function() {
    mainService.getLifts().then(function(response) {
      $scope.lifts = response.data;
      for (var i = 0; i < $scope.lifts.length; i++) {
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
