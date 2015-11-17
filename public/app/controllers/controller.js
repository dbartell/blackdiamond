angular.module('blackApp')

.controller('homeCtrl', function($scope, blackService) {
  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  }
);
})

.controller('hotOilTruckCtrl', function ($scope, blackService) {
  blackService.getData().then(function(response) {
    console.log(response.data);
    $scope.information = response.data[3].build;
  });
})

.controller('fracWaterHeatersTractorCtrl', function ($scope, blackService) {
  blackService.getData().then(function(response) {
    console.log(response.data);
    $scope.information = response.data[2].build;
  });
})

.controller('fracWaterHeatersTrailerCtrl', function ($scope, blackService) {
  blackService.getData().then(function(response) {
    console.log(response.data);
    $scope.information = response.data[1].build;
  });
})

.controller('highPressureSkidPumpCtrl', function ($scope, blackService) {
  blackService.getData().then(function(response) {
    console.log(response.data);
    $scope.information = response.data[0].build;
  });
});
