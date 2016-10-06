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
