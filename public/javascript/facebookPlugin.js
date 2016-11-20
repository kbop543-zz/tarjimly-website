window.fbAsyncInit = function() {
  console.log("called correctly");
  FB.init({
    appId: "1602801866685131",
    xfbml: true,
    version: "v2.6"
  });

  FB.Event.subscribe('send_to_messenger', function(e) {
  // callback for events triggered by the plugin

  console.log('facebook sent event returned');
  console.log(e);

  });

};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) { return; }
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
