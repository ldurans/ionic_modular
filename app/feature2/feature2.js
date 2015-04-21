(function () {
  'use strict';

  angular
      .module('app.feature2')
      .controller('Feature2', Feature2);

  Feature2.$inject = ['$scope', 'ExampleFactory'];

  function Feature2($scope, ExampleFactory) {
    /* jshint validthis: true */

    var vm = this;

    activate();

    $scope.$on('$ionicView.enter', function() {
      activateViewToForeground();
    });

    ////////////////////////////////////////////

    function activate() {
      //  Run code for initial activation of view
    }

    function activateViewToForeground() {
      //  Run code for when the view comes into foreground
      //  On initial launch this function fires prior to activate()
    }

  }
})();