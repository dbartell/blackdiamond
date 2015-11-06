angular.module('blackApp')

.directive('navbar', function() {
    return {
        restrict: 'E',
        templateUrl: '/app/views/directive-header.html'
    }
})
.directive('footbar', function () {
    return {
        restrict: 'E',
        templateUrl: '/app/views/directive-footer.html'
    }
})
