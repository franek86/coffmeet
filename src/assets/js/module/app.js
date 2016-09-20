var app = angular.module('coffMeet', ['ngRoute', 'ngStorage'])
  .config(['$routeProvider',  function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'src/templates/home.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'src/templates/about.html',
            controller: 'MainCtrl'
        })
        .when('/cofes', {
            templateUrl: 'src/templates/cofes.html',
            controller: 'MainCtrl'
        })
        .when('/products', {
            templateUrl: 'src/templates/products.html',
            controller: 'MainCtrl'
        })
        .when('/products/:id', {
            templateUrl: 'src/templates/product.html',
            controller: 'MainCtrl'
        })
        .when('/contact', {
            templateUrl: 'src/templates/contact.html',
            controller: 'ContactPageCtrl'
        })
        .when('/account', {
            templateUrl: 'src/templates/account.html',
            controller: 'MainCtrl'
        })
        .when('/cart', {
            templateUrl: 'src/templates/cart.html',
            controller: 'MainCtrl'
        })
        .when('/checkout', {
            templateUrl: 'src/templates/checkout.html',
            controller: 'MainCtrl'
        })

        .otherwise({
            redirectTo: '/404',
            templateUrl: 'src/templates/404.html'
        });

  }]);
