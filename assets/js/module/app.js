var app = angular.module('coffMeet', ['ngRoute', 'ngStorage'])
  .config(['$routeProvider',  function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: './templates/home.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'https://franek86.github.io/coffmeet/templates/about.html',
            controller: 'MainCtrl'
        })
        .when('/cofes', {
            templateUrl: 'https://franek86.github.io/coffmeet/templates/cofes.html',
            controller: 'MainCtrl'
        })
        .when('/products', {
            templateUrl: 'thttps://franek86.github.io/coffmeet/emplates/products.html',
            controller: 'MainCtrl'
        })
        .when('/products/:id', {
            templateUrl: 'https://franek86.github.io/coffmeet/templates/product.html',
            controller: 'MainCtrl'
        })
        .when('/contact', {
            templateUrl: 'https://franek86.github.io/coffmeet/templates/contact.html',
            controller: 'ContactPageCtrl'
        })
        .when('/account', {
            templateUrl: 'https://franek86.github.io/coffmeet/templates/account.html',
            controller: 'MainCtrl'
        })
        .when('/cart', {
            templateUrl: 'https://franek86.github.io/coffmeet/templates/cart.html',
            controller: 'MainCtrl'
        })
        .when('/checkout', {
            templateUrl: 'https://franek86.github.io/coffmeet/templates/checkout.html',
            controller: 'MainCtrl'
        })

        .otherwise({
            redirectTo: '/404',
            templateUrl: 'https://franek86.github.io/coffmeet/templates/404.html'
        });

  }]);
