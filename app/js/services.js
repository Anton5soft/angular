'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
.factory('AuthService', function() {
    function auth (credentials) {
        if (credentials.login === 'admin' && credentials.password ==='admin' ) {
            return true;
        }
        return false;
    }
       return {
           auth:auth
       }
});