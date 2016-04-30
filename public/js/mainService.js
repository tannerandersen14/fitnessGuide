angular.module('fitnessGuide').service('mainService', function($q, $http, $localStorage) {

  this.admin = false;
  this.currentUser = $localStorage.currentUser;
  this.newTemplateLift = {
    templateName: '',
    lifts: [],
    user: []
  };
  this.templateLifts = [];
  this.directions = false;
  this.userPageUser = {};
  this.image = false;

  this.checkForAdmin = function() {
    if ($localStorage.currentUser.admin === true) {
      this.admin = true;
    } else {
      this.admin = false;
    }
  }

  this.checkForTemplate = function() {
    if (this.newTemplateLift === []) {
      return false;
    } else {
      return true;
    }
  }

  this.getLifts = function() {return $http.get('/api/lifts')};
  this.addLift = function(data) {return $http.post('/api/lifts', data)};
  this.deleteLift = function(id) {return $http.delete('/api/lifts?id=' + id)};
  this.addUserLift = function(user) {return $http.put('/user?id=' + $localStorage.currentUser._id, $localStorage.currentUser)};
  this.removeUserLift = function() {return $http.put('/user?id=' + $localStorage.currentUser._id, $localStorage.currentUser)};
  this.addTemplateLift = function() {return $http.post('/user/lifts', this.newTemplateLift)};
  this.makeUserAdmin = function() {return $http.get('/secret')};
  this.updateUserAdmin = function() {return $http.put('/user?id=' + $localStorage.currentUser._id, $localStorage.currentUser)}
  this.deleteTemplateLift = function(id) {return $http.delete('/user/lifts?id=' + id)};
  this.getTemplateLift = function() {return $http.get('/user/lifts')};
  this.updateUser = function() {return $http.put('/user?id=' + $localStorage.currentUser._id, $localStorage.currentUser)}
  this.getUser = function() {return $http.get('/user/lifts/user?username=' + $localStorage.currentUser.username)}
  this.getSpecificLift = function(name) {return $http.get('/user/lift?name=' + name)};








})
