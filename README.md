<h1>Facebook Oauth Example For Ionic Framework</h1>

This Exemple will demonstrate how to authenticate with Facebook and retrieve an access token for use with the Facebook REST API.
This Exemple works for ios and android.
This Exemple Use ngCordovaOauth

<h1>Requirements</h1>
<ul>
    <li>Apache Cordova 3.5+</li>
    <li>AngularJS 1</li>
    <li>Ionic  1.3 +</li>
    <li>Apache Cordova InAppBrowser Plugin</li>
    <li>Apache Cordova Whitelist Plugin</li>
</ul>

<h1>Screens</h1>
  1)loginPage
  2)homePage
  
<h1>Configuration</h1>
Download this example project from GitHub and run the following commands:
<pre>
  <code>
  $ ionic platform add android
            OR 
  $ ionic platform add ios        
  $ cordova plugin add org.apache.cordova.inappbrowser
  $ cordova plugin add cordova-plugin-whitelist
  </code>
</pre>
The above commands will add the Android or ios  build platform and install the required Apache InAppBrowser plugin.

<h3>Installing ngCordovaOauth </h3>
Bower way:

Manually :

<pre>
  <code>
$ bower install ng-cordova-oauth
$ bower install ngstorage 
 </code>
</pre>

Or simply 

<pre>
  <code>
$ bower install  //in case of using this repository 

 </code>
</pre>

his example application requires you to have your own Facebook application registered with Facebook.com. Doing so will give you a unique client id that can be included into your project. When registering your application with Facebook, make sure to set the callback uri to http://localhost/callback, otherwise ngCordova will not function.
make sure to place your own APP_ID in www/app/services/constants.js
<pre>
  <code>
FACEBOOK_CLIENT_ID: 'YOUR_FACEBOOK_APP_ID'
 </code>
</pre>

<h1>Usage</h1>
With this example project configured on your computer, run the following from the Terminal or command prompt:

<pre>
  <code>
  $ ionic build android
            OR 
  $ ionic build  ios        
 
  </code>
</pre>

<h1>Have a question or found a bug (compliments work too)?</h1>
email: karraysoufien@gmail.com
       karray.soufien.ipsas@gmail.com


