(function(){

//'use strict';

var app = angular.module('radon-reposts', []);

app.controller('ReportList', function(){
  this.reports = [{
    name: 'Отчёт WAP ДЗ', 
    type: 'fraud'
    }, 
    {
    name: 'Мониторинг Роуминга',
    type: 'RA'
    }];
});

app.controller('RoamingReport', ['$http', function($http){
    var store = this;
    store.tablerows = [];
    store.displayed = [];

    $http.get('/api/v1/roaming.json')
        .success(function(data) {
            store.tablerows = data;     
        });    
        
    store.displayed = [].concat(store.tablerows);

}]);


})();
