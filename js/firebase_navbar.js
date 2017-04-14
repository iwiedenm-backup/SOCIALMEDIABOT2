$(document).ready(function() {
  $('.nav-account-menu').hide();
  $('.nav-login-menu').hide();
  function firebaseSignInTest() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in, show menu
        $('.nav-login-menu').hide();
        $('.nav-account-menu').show();
        $('#account-name').text(user.email);
        //set credentials for app
        $('#loggedIn').text(true);
        $('#loggedInName').text(user.email);
        $('#loggedInPass').text(user.email);
      }
      else {
        // User is signed in, hide menu
        $('.nav-login-menu').show();
        $('.nav-account-menu').hide();
      }
    }
                                      );
  }
  firebaseSignInTest();
}
                 );
