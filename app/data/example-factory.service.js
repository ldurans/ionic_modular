(function(){
  'use strict';

  angular
      .module('app.data')
      .factory('ExampleFactory', ExampleFactory);

  ExampleFactory.$inject = ['$q', 'EXAMPLE_KEYS', '$timeout'];

  function ExampleFactory($q, EXAMPLE_KEYS, $timeout) {


    return {
      getStuff: getStuff
    };

    ////////////////////////////////////////////////////////

    function getStuff(){
      console.log(EXAMPLE_KEYS.APP_ID);
      var deferred = $q.defer();

      $timeout(function(){
        deferred.resolve(window.CONTACTS);
      }, 2000);

      return deferred.promise;
    }
  }

  window.CONTACTS = [
    {"id":1,"first_name":"Patrick","last_name":"Rogers","country":"Cyprus","ip_address":"153.88.89.148","email":"progers@yata.net"},
    {"id":2,"first_name":"Janet","last_name":"Gordon","country":"Croatia","ip_address":"209.73.121.212","email":"jgordon@skivee.biz"}
  ];

})();