(function(){

//'use strict';

var app = angular.module('radon-reposts', ['ngDialog']);

app.controller('ReportListController', function(){
  this.reports = [{
    name: 'Отчёт WAP ДЗ', 
    type: 'fraud',
    url: '#'
}, 
{
    name: 'Мониторинг Роуминга',
    type: 'RA',
    url: '#roam_rep'
}];
});

app.controller('RoamingReportController', ['$http', '$scope', 'ngDialog', function($http, $scope, ngDialog){
    var delColoring = false;   // Delete\Edit button hover highlight
    var editColoring = false;
 
    var store = this;  
    store.tablerows = [];  // store of DB table rows
    store.displayed = [];  // rows in current page
    
    /*
     * Get API
     */
    
    $http.get('/api/v1/roaming.json').success(function(data) {
        store.tablerows = data;     
    });   
    /* Get */ 

    store.displayed = [].concat(store.tablerows);

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
        $scope.val = $.extend(true, {}, row || {});  // We need a copy of the object if we dont want see the "live page" update

        $scope.header = header;

        ngDialog.open({ 
            template: 'app/templates/roam_rep_edit.html',
            controller: 'editWindowController',
            scope: $scope
        }).closePromise.then(function (data) { 
            // if we save row, get new data from server
            if(!data.value) { 
                $http.get('/api/v1/roaming.json').success(function(data) {
                    store.tablerows = data;     
                });   
                store.displayed = [].concat(store.tablerows);
            }      
        });
    };
}]);


})();
