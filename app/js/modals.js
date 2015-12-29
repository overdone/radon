(function() {

var app = angular.module('radon-modals', ['ngDialog']);

// Edit and Add window
app.controller('editWindowController', ['$http', '$scope', 'ngDialog', function($http, $scope, ngDialog){

    // Form submit action
    $scope.submit = function(header) {
        if (header == 'Добавить') {            
            $http.post('http://glockweb/api/v1/roaming/', $scope.fields)
                .success(function(data, status) {
                    $scope.closeWindow();
                })
                .error(function(status) {
                    console.log(status);
                });

        } else if (header == 'Изменить') {            
            $http.put('http://glockweb/api/v1/roaming/' + $scope.fields.id, $scope.fields)
                .success(function(data, status) {
                    $scope.closeWindow();
                })
                .error(function(status) {
                    console.log(status);
                });

        } else {
            void(0);
        }
    };


    // Close button action
    $scope.closeWindow = function() {
        ngDialog.closeAll();
    };

}]);

})();