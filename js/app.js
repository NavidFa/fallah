var app = angular.module("portfolio",['ngRoute','ngAnimate'])
app.config(function($routeProvider, $locationProvider){
  $routeProvider
      .when('/', {
        controller:"homepage"
      })
      .when('/about/',{
        templateUrl: 'partials/portfolio.html',
      })
      .when('/portfolio/',{
        templateUrl: 'partials/portfolio.html',
      })
      .when('/contact/',{
        templateUrl: 'partials/portfolio.html',
      })
})
