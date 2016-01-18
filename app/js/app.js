(function(){

//'use strict';

var app = angular.module('radon', ['radon-reposts', 'radon-modals', 'radon-menu', 'smart-table', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'app/templates/empty_page.html'
        }).
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

    
