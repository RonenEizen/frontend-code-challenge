import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import './style.scss';
import data from './data';

angular
.module('app', ['ngMaterial','ngAnimate'])
.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])
.config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
})
.controller('appCtrl', function ($scope) {
    $scope.items = data;
});
    