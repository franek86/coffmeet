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
