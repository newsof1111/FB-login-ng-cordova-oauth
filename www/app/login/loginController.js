(function () {
    'use strict';

    angular.module('FBLogin')
        .controller('LoginCtrl', LoginCtrl);
    LoginCtrl.$inject = ['$scope','$ionicSideMenuDelegate','$ionicHistory', '$cordovaOauth','Authentication'];

    function LoginCtrl($scope,$ionicSideMenuDelegate,$ionicHistory, $cordovaOauth,Authentication) 
    {
        var vm=this;
        vm.facebookLogin=facebookLogin;

       //disable the menu swiping
       $ionicSideMenuDelegate.canDragContent(false);

       //disable back button for home page 
       $ionicHistory.nextViewOptions
       (
           {
                    historyRoot: true
           }
        );
        
        // Call  Facebook Authentification 
        function facebookLogin() 
         {
                Authentication.FBLogin();
         }
        
    


    }

})();
