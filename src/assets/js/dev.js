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
    $http.get('src/data/products.json')
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
    templateUrl: 'src/templates/cartIcon.html',
    controller: 'MainCtrl'
  }
});
