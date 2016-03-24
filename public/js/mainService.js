angular.module('fitnessGuide').service('mainService', function($q, $http) {

  this.getLifts = function() {return $http.get('/api/lifts')};
  this.addLift = function(data) {return $http.post('/api/lifts', data)};
  this.deleteLift = function(id) {return $http.delete('/api/lifts?id=' + id)};







})
