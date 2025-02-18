var app = angular.module('coffMeet', ['ngRoute', 'ngStorage'])
  .config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'MainCtrl'
        })
        .when('/cofes', {
            templateUrl: 'templates/cofes.html',
            controller: 'MainCtrl'
        })
        .when('/products', {
            templateUrl: 'templates/products.html',
            controller: 'MainCtrl'
        })
        .when('/products/:id', {
            templateUrl: 'templates/product.html',
            controller: 'MainCtrl'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'ContactPageCtrl'
        })
        .when('/cart', {
            templateUrl: 'templates/cart.html',
            controller: 'MainCtrl'
        })
        .when('/checkout', {
            templateUrl: 'templates/checkout.html',
            controller: 'MainCtrl'
        })

        .otherwise({
            redirectTo: '/404',
            templateUrl: 'templates/404.html'
        });
  }]);
