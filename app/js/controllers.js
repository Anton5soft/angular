'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('Login', ['$scope','$location','AuthService', function($scope,$location,AuthService) {
$scope.credentials = {login:'',password: ''};
        $scope.login = function () {
            if(AuthService.auth($scope.credentials) ) {
                $location.path('userlist');
            }
            else {
                $scope.errorMsg = "Auth error use correct Login or Password"

            }
        }
  }])
  .controller('UserList', ['$scope', function($scope) {
        $scope.userlist = [{
            name: "Beatles",
            songs: ["Yellow Submarine", "Helter Skelter", "Lucy in the Sky with Diamonds"]
        }, {
            name: "Rolling Stones",
            songs: ["Ruby Tuesday", "Satisfaction", "Jumpin' Jack Flash"]
        }];
  }]);
