app.controller("homepage", function($scope, $http, $location) {
  $scope.title="hiii"
  $scope.home= function(){
    console.log("fmdfnsdnf");
    $location.path('/')
  }
  $scope.about = function(){
    console.log("fmdfnsdnf");
    $location.path('/about/')
  }
  $scope.portfolio = function(){
    console.log("fmdfnsdnf");
    $location.path('/portfolio/')
  }
  $scope.contact = function(){
    console.log("fmdfnsdnf");
    $location.path('/contact/')
  }
})
