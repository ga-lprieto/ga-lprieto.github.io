'use strict';

/**
 * @ngdoc overview
 * @name lprietoApp
 * @description
 * # lprietoApp
 *
 * Main module of the application.
 */
angular
  .module('lprietoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/knowledge', {
        templateUrl: 'views/knowledge.html',
        controller: 'KnowledgeCtrl'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/academic',{
        templateUrl: 'views/academic.html',
        controller: 'AcademicCtrl'
      })
      .when('/experience',{
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
