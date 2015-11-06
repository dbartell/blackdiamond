angular.module('blackApp')

.controller('hotOilTruckCtrl', function ($scope, blackService) {
  blackService.getData().then(function(response) {
    console.log(response.data);
    $scope.information = response.data[3].build;
  })
})

.controller('fracWaterHeatersTractorCtrl', function ($scope, blackService) {
  blackService.getData().then(function(response) {
    console.log(response.data);
    $scope.information = response.data[2].build;
  })
})

.controller('fracWaterHeatersTrailerCtrl', function ($scope, blackService) {
  blackService.getData().then(function(response) {
    console.log(response.data);
    $scope.information = response.data[1].build;
  })
})

.controller('highPressureSkidPumpCtrl', function ($scope, blackService) {
  blackService.getData().then(function(response) {
    console.log(response.data);
    $scope.information = response.data[0].build;
  })
})
