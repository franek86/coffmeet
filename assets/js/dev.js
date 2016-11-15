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

app.controller("ContactPageCtrl", ['$scope', '$http', function($scope, $http){


    $scope.result                   = "hidden";
    $scope.resultMessage            = "";
    $scope.contactData;
    $scope.submitButtonDisabled     = false;
    $scope.sumbitted                = false;

    $scope.submit = function(contactform){
        console.log(contactform);
        $scope.sumbitted            = true;
        $scope.submitButtonDisabled = true;

        if(contactform.$valid){
            $http({
                method: 'POST',
                url: '',
                headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data){

                if(data.success){
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage        = data.message;
                    $scope.result               = 'bg-success';
                }else{
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage        = data.message;
                    $scope.result               = 'bg-danger';
                }
            })

        }else{
            $scope.submitButtonDisabled = false;
            $scope.resultMessage        = 'Failed to Send';
            $scope.result               = 'bg-danger';
        }
    }

}]);

app.controller('MainCtrl', ['$scope', '$http', '$routeParams','$localStorage', function($scope, $http, $routeParams, $localStorage){

  $scope.products = [];
  $scope.cart = [];

  $scope.getData   =  function(){
    $http.get('data/products.json')
            .then(function(res){
              if(res.data != 'null'){
                $scope.products = res.data;
                $scope.item= res.data[$routeParams.id];
              }
            });
  }

  $scope.addCart = function(products){
      $scope.cart.push(products);
      localStorage.setItem('items',JSON.stringify($scope.cart));
  }

  $scope.removeCart = function(products){
    $scope.cart.splice($scope.cart.indexOf(products), 1);
    localStorage.setItem('items',JSON.stringify($scope.cart));
  }

  $scope.getItems = function(){
    $scope.cart =JSON.parse(localStorage.getItem('items'));
    console.log($scope.cart);
  }

  $scope.selected = function(products){
    if($scope.cart.indexOf(products)  !== -1){
      return true;
    } else {
      return false;
    }
  }

  $scope.totalPrice = function(){
    var total = 0;
    $scope.cart.forEach(function(data){
      total += data.price*data.amount;
    });
    return total;
  }

  $scope.incrementAmount = function(product){
    product.amount++;
  }

  $scope.decrementAmount = function(product){
    if(product.amount > 1){
      product.amount--;
    }
  }

  


}]);

app.directive('cartIcon', function(){
  return{
    restrict: 'E',
    templateUrl: 'templates/cartIcon.html',
    controller: 'MainCtrl'
  }
});

app.directive('login', function(){
  return{
    restrict: 'E',
    templateUrl: 'templates/login.html',
    controller: 'MainCtrl'
  }
});
