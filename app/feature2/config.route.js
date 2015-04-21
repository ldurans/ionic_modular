(function () {
  'use strict';

  angular
      .module('app.feature2')
      .config(function($stateProvider) {

        $stateProvider
            .state('feature2', {
              url: '/feature2',
              templateUrl: 'app/feature2/feature2.html',
              controller: 'Feature2 as vm'
            });
      });
})();