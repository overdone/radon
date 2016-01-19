(function(){

    var menu = angular.module('radon-menu', []);

    menu.controller('MenuController', ['$scope', function($scope) {
        $scope.arrowClass = "arrow-down-icon"; // Default menu item arrow state

        $scope.sections = [
            {
                name: 'Отчёты RA',
                active: false,
                items: [
                {
                    name: 'Мониторинг Роуминга',
                    type: 'RA',
                    url: '#roam_rep'
                },{
                    name: 'Payments',
                    type: 'RA',
                    url: '#payments'    
                },{
                    name: 'Adjustment',
                    type: 'RA',
                    url: '#adjust'    
                }]
            },{
                name: 'Отчёты FRAUD',
                active: false,
                items: [{
                    name: 'Отчёт WAP ДЗ', 
                    type: 'fraud',
                    url: '#mpro'
                },{
                    name: 'ДЗ краткий', 
                    type: 'fraud',
                    url: '#dzshort'
                },{
                    name: 'Мошенники', 
                    type: 'fraud',
                    url: '#frauders'
                }]
            }
        ];

        // Click menu item action
        $scope.toggleMenu = function(s) {
            s.active = !s.active;
        };

    }]);

})();