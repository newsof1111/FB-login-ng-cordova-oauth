(function () {
    'use strict';

    angular.module('FBLogin')
        .controller('homeCtrl', homeCtrl);
    homeCtrl.$inject = ['$scope', '$http', '$localStorage','$state','$ionicSideMenuDelegate'];

    function homeCtrl($scope, $http, $localStorage,$state,$ionicSideMenuDelegate) 
    {
        var vm=this;
        vm.profileData = {};

        // variable for Connexion Status 
        vm.NoConnexion=false;


       //enable the menu swiping
       $ionicSideMenuDelegate.canDragContent(true);

      
       //load profil data from Facebook
       loadProfil();

       function loadProfil() 
      {
            if($localStorage.hasOwnProperty("token") === true) 
             {
                $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: $localStorage.token, fields: "name,picture.width(200).height(200)", format: "json" }}).then(function(result) {
                    vm.profileData = result.data;
                    vm.NoConnexion=false;
                }, function(error) {
                    alert("There was a problem getting your profile.");
                    vm.NoConnexion=true;
                });
             } 
            else
             {
                alert("Your Session Is expired");
                $state.go('app.login');
            }
    
      }

      

    }

})();
