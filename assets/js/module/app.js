var app = angular.module('coffMeet', ['ngRoute', 'ngStorage'])
<<<<<<< HEAD
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
=======
  .config(['$routeProvider', function($routeProvider){
>>>>>>> origin/gh-pages

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
<<<<<<< HEAD

        $locationProvider.html5Mode(true);
=======
>>>>>>> origin/gh-pages
  }]);
