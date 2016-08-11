'use strict';

/**
 * @ngdoc overview
 * @name typetestApp
 * @description
 * # typetestApp
 *
 * Main module of the application.
 */
angular
  .module('typetestApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
