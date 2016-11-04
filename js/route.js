angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(function($routeProvider) {
   $routeProvider
   .when('/home',{ templateUrl:'pages/home.html', controller:'homeCtrl'})
   .when('/aboutus', { templateUrl:'pages/aboutus.html'})
   .when('/contactus', { templateUrl:'pages/contactus.html'});
});

angular.module('myApp').controller('HeaderController', ['$scope', '$location', function($scope, $location) {
     $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}]);


angular.module('myApp').controller('validateCtrl', ['$scope', function($scope) {
    $scope.user = '';
    $scope.password = '';
}]);
