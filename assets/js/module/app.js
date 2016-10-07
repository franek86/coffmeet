var app = angular.module('coffMeet', ['ngRoute', 'ngStorage'])
  .config(['$routeProvider',  function($routeProvider){

    $routeProvider
        .when('/home', {
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
        .when('/account', {
            templateUrl: 'templates/account.html',
            controller: 'MainCtrl'
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
