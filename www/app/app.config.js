(function () {
    "use strict";

angular.module('FBLogin')
.run(runFunction)
.config(Configuration);
Configuration.$inject = ['$stateProvider', '$urlRouterProvider'];
runFunction.$inject = ['$ionicPlatform'];

function runFunction ($ionicPlatform)
 {
    $ionicPlatform.ready(function() 
      {
      
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
        
          StatusBar.styleDefault();
        }
      });
}



 function Configuration($stateProvider, $urlRouterProvider)
  {

    $stateProvider
        .state('app', 
            {
              url: '/app',
              abstract: true,
              templateUrl: 'app/menu/Menu.html',
              controller: 'MenuController as vm'
            })

        .state('app.home', 
           {
              url: '/home',
              cache: false,
              views: {
                'menuContent': {
                  templateUrl: 'app/home/Home.html',
                  controller: 'homeCtrl as vm'
                }
              }
           })
    
        .state('app.login', 
           {
              url: '/login',
              cache: false,
              views: {
                'menuContent': {
                  templateUrl: 'app/login/Login.html',
                  controller: 'LoginCtrl as vm' }  },
                    onEnter: function($state, Authentication)
                                {
                                   if(Authentication.isAuthenticated())
                                    {
                                      $state.go('app.home');
                                    }
                                }
                
           });

 
  $urlRouterProvider.otherwise('/app/login');
}
 })();