

(function () {
    'use strict';

    angular.module('FBLogin')
        .controller('MenuController', AppCtrl);
    AppCtrl.$inject = ['$scope','Authentication','$state'];

    function AppCtrl($scope,Authentication,$state) 
    {

      var vm=this;
      vm.LogOut=LogOut;

      function LogOut() 
      {
        Authentication.LogOut();
        $state.go('app.login');
      }

    }

})();


