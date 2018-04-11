import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angulargrid';
import './style.scss';
import data from './data';

angular
.module('app', ['ngMaterial','ngAnimate', 'angularGrid'])
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
    