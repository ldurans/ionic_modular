(function () {
  'use strict';

  angular
      .module('app.feature1')
      .config(function($stateProvider) {

        $stateProvider
            .state('feature1', {
              url: '/feature1',
              templateUrl: 'app/feature1/feature1.html',
              controller: 'Feature1 as vm'
            });
      });
})();