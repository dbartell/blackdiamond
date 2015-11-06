angular.module('blackApp')
.service('blackService', function($http) {
  this.getData = function() {
    return $http({
      method: 'GET',
      url: '/build/hotoil'
    }).then(function(response) {
      return response;
    })
  }
})
