(function () {
  'use strict';

  angular
      .module('app.feature1')
      .controller('Feature1', Feature1);

  Feature1.$inject = ['$scope', 'ExampleFactory'];

  function Feature1($scope, ExampleFactory) {
    /* jshint validthis: true */

    var vm = this;
    vm.contacts = [];

    activate();

    $scope.$on('$ionicView.enter', function() {
      activateViewToForeground();
    });

    ////////////////////////////////////////////

    function activate() {
    //  Run code for initial activation of view
      ExampleFactory.getStuff().then(function(data) {
        vm.contacts = data;
        console.log("Contacts returned");
      });
    }

    function activateViewToForeground() {
      //  Run code for when the view comes into foreground
      //  On initial launch this function fires prior to activate()
    }

  }
})();