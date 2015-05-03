"use strict";

angular
    .module('starterApp', ['ngMaterial'])
    .config(function($mdThemingProvider, $mdIconProvider){
            $mdThemingProvider.theme('default')
                .primaryPalette('green')
                .accentPalette('amber');
            $mdIconProvider.iconSet("avatar", './images/avatar-icons.svg', 128);
    })
    .controller("appCtrl", ["$scope", "$mdSidenav", "$mdUtil", "$log", function($scope, $mdSidenav, $mdUtil, $log){
      $scope.toggleLeft = buildToggler('left');
      /**
       * Build handler to open/close a SideNav; when animation finishes
       * report completion in console
       */
      function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
              $mdSidenav(navID)
                .toggle()
                .then(function () {
                  $log.debug("toggle " + navID + " is done");
                });
            },300);
        return debounceFn;
      }
      $scope.close = function () {
        $mdSidenav('left').close()
          .then(function () {
            $log.debug("close LEFT is done");
          });
      };
      $scope.tiles = buildGridModel({
        icon : "avatar:svg-",
        title: "Svg-",
        background: ""
      });
      function buildGridModel(tileTmpl){
        var it, results = [ ];
        for (var j=0; j<11; j++) {
          it = angular.extend({},tileTmpl);
          it.icon  = it.icon + (j+1);
          it.title = it.title + (j+1);
          it.span  = { row : 1, col : 1 };
          switch(j+1) {
            case 1:
              it.background = "red";
              it.span.row = it.span.col = 2;
              break;
            case 2: it.background = "green";         break;
            case 3: it.background = "darkBlue";      break;
            case 4:
              it.background = "blue";
              it.span.col = 2;
              break;
            case 5:
              it.background = "yellow";
              it.span.row = it.span.col = 2;
              break;
            case 6: it.background = "pink";          break;
            case 7: it.background = "darkBlue";      break;
            case 8: it.background = "purple";        break;
            case 9: it.background = "deepBlue";      break;
            case 10: it.background = "lightPurple";  break;
            case 11: it.background = "yellow";       break;
          }
          results.push(it);
        }
        return results;
      }
    }])
    .controller("LeftCtrl", ["$scope", "$mdSidenav", "$log", function($scope, $mdSidenav, $log){
      
    }]);