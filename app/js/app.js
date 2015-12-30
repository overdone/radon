(function(){

//'use strict';

var app = angular.module('radon', ['radon-reposts', 'radon-modals', 'smart-table', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/roam_rep', {
            templateUrl: 'app/templates/roam_rep_table.html',
            controller: 'RoamingReportController',
            controllerAs: 'store'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

})();

    
