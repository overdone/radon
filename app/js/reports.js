(function(){

//'use strict';

var app = angular.module('radon-reposts', ['ngDialog']);

app.controller('ReportListController', function(){
  this.reports = [{
    name: 'Отчёт WAP ДЗ', 
    type: 'fraud'
}, 
{
    name: 'Мониторинг Роуминга',
    type: 'RA'
}];
});

app.controller('RoamingReportController', ['$http', '$scope', 'ngDialog', function($http, $scope, ngDialog){
    var canDelete = true;     // If true show Delete roe button
    var canEdir = false;       // If true show Edit row button
    var delColoring = false;
    var editColoring = false;

    /*
     * Get API
     */
     var store = this;  
    store.tablerows = [];  // store of DB table rows
    store.displayed = [];  // rows in current page

    $http.get('/api/v1/roaming.json')
    .success(function(data) {
        store.tablerows = data;     
    });    

    store.displayed = [].concat(store.tablerows);
    /* Get */


    /*
     * Delete API
     */
     $scope.deleteRow = function(rowId, ind) {
        var res = ngDialog.openConfirm({
            template: 'app/templates/confirm_delete.html'
        }).then(function (value) {
            $http.delete('/api/v1/roaming/' + rowId)
              .success(function(data, status) {
                 store.displayed.splice(ind, 1);
             });
        }, function (reason) {

        });        
    };
/* Delete */

$scope.editRow = function(header, row) {
    $scope.val = row || {};
    $scope.header = header;

    ngDialog.open({ 
        template: 'app/templates/roam_rep_modal.html',
        controller: 'editWindowController',
        scope: $scope
    });
};



}]);


})();
