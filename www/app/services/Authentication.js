(function () {
    'use strict';

    angular.module('Authentication',['CONSTANTS'])
        .service('Authentication', Authentication);

    Authentication.$inject = ['CONSTANTS','$cordovaOauth','$localStorage','$state'];

    function Authentication(CONSTANTS,$cordovaOauth,$localStorage,$state) {
        
         var service = {
             getClientId: getClientId,
             FBLogin: FBLogin,
             isAuthenticated:isAuthenticated,
             LogOut:LogOut
         };

        return service;

      
        
        function LogOut() 
          {
              //delete the stored token from first login
             delete $localStorage.token;
             
          }

         function isAuthenticated() 
          {
              //lets check if there is a token stored from previous  login
             var token = $localStorage.token;
             if (!token) {
                 return false;
             }
             return true;

          }

		//make a facebook login And getting a new  token  for authentified user
        function FBLogin()
         {
            $cordovaOauth.facebook(CONSTANTS.FACEBOOK_CLIENT_ID, ["email","public_profile"], {"auth_type": "rerequest"})
                .then(function(result)
                                {
                                    //Store the  token (in object to not ask login in every oppning of app) 
                                    $localStorage.token = result.access_token;
                                    $state.go('app.home');
                        
                                }, function(error) 
                                {
                                
                                    alert("There was a problem getting your profile.");
                                    console.log(JSON.stringify(error));

                                }
                     );
        
         }
    
       

       
     }
})();
