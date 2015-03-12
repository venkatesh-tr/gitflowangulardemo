
angular.module('testnotes', [
  'ngRoute',
  'testnotes.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/testnotes/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
