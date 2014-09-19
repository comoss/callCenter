var callCenter = angular.module('callCenter');

 callCenter.controller('gridCtrl', function($scope, currentUser) {

          $scope.gridOptions = { data: 'leads',
            height: '110px',
            sortInfo: {fields: ['Name', 'Phone', 'Location', 'notes'], directions: ['asc']},
            columnDefs: [
              {field: 'name', displayName: 'Name', width: '150px'},
              {field: 'phone', displayName: 'Phone', width: '110px'},
              {field: 'email', displayName: 'Email', width: '200px'},
              {field: 'location', displayName: 'Location', width:'300px'},
              {field: 'notes', displayName: 'Notes', width:'375px'},
            ]

      };



      });