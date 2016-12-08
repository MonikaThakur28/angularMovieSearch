/**
     * You must include the dependency on 'ngMaterial' 
     */
    var app = angular.module('BlankApp', ['ngMaterial']);
    // angular.module('listDemo1', ['ngMaterial'])


// .config(function($mdIconProvider) {
//   $mdIconProvider
//     .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
// })
app.controller('AppCtrl', function($scope, $mdBottomSheet) {
    // var imagePath = 'img/list/60.jpeg';

    $scope.todos = [
      {
        // face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        // face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        // face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        // face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        // face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
});

// app.directive('movieDetails', ['', function(){
//   // Runs during compile
//   return {
//     // name: '',
//     // priority: 1,
//     // terminal: true,
//     // scope: {}, // {} = isolate, true = child, false/undefined = no change
//     // controller: function($scope, $element, $attrs, $transclude) {},
//     // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
//     restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
//     // template: '',
//     templateUrl: 'bottomSheet_details.html',
//     // replace: true,
//     // transclude: true,
//     // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
//     link: function($scope, iElm, iAttrs, controller) {
      
//     }
//   };
// }]);