angular.module('fitnessGuide').controller('userCtrl', function($scope, mainService, AuthService) {
  $scope.init = function() {
    $scope.currentUser = AuthService.currentUser;
    console.log($scope.currentUser)
  }
  $scope.init();
  console.log('hey')



})
