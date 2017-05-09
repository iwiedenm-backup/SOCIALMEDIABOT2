document.getElementById("navMenuTop").innerHTML =
'<div class="container navbar-main" >'+
   '<a href="index.html" class="logo-new">'+
  //  '<img src="img/custom/social-media-bot-logo-2x-2.png" srcset="img/custom/social-media-bot-logo-2x-2.png" alt="Social Media BOT Logo"/>'+
   '</a>'+
   '<a href="#" class="btn-navbar-menu" data-ui-menu-toggle="navbar-menu"></a>'+
  //  '<a href="#" class="btn-navbar-menu-login" data-ui-menu-toggle="navbar-menu-login"></a>'+
   '<div class="navbar-mobile-menu" data-ui="navbar-menu">'+
   '<ul>'+
      '<li class="">'+
         '<a href="bots.html" >Bots</a>'+
      '</li>'+
      '<li class="">'+
         '<a href="download.html" >Download</a>'+
      '</li>'+
      '<div class="navbar-desktop-menu navbar-desktop-menu-right">'+
       '<ul>'+
         '<li id="" class="">'+
         '<a href="#" class="link-arrow link-arrow-bottom" data-toggle="dropdown">Services</a>'+
         '<ul class="dropdown-menu dropdown-menu-right">'+
          //  '<li><a href="soundcloud-plays.html">SoundCloud Plays</a></li>'+
           '<li><a href="bangerlist.html">SoundCloud Reposts</a></li>'+
         '</ul>'+
       '</ul>'+
      '</div>'+
   '</ul>'+
   '<ul class="hidden-md hidden-lg">'+

   		'<li id="account-name-changed"></li>'+
      '<li><a href="profile.html">Profile</a></li>'+
  		'<li>'+
  			'<a href="#" onclick="firebase.auth().signOut();">Log out</a>'+
  		'</li>'+

   '</ul>'+
   '</div>'+
   '<div class="navbar-mobile-menu nav-login-menu" data-ui="navbar-menu-login">'+
      '<ul>'+
         '<li><a href="sign-in.html">Log in</a></li>'+
         '<li class="visible-xs visible-sm">'+
            '<a href="sign-up.html">Sign up</a>'+
         '</li>'+
         '<li class="hidden-xs hidden-sm">'+
            '<button class="btn btn-plain btn-primary-new">Sign up</button>'+
         '</li>'+
      '</ul>'+
   '</div>'+
   '<div class="navbar-desktop-menu">'+
      '<ul>'+
        '<li class="">'+
          '<a href="index.html" style="font-size: 26px; font-weight: bold;">soci<span class="description color-blue">albo</span>t</a>'+
        '</li>'+
         '<li class="">'+
            '<a href="bots.html" >Bots</a>'+
         '</li>'+
         '<li class="">'+
            '<a href="download.html" >Download</a>'+
         '</li>'+
         '<div class="navbar-desktop-menu navbar-desktop-menu-right">'+
          '<ul>'+
            '<li id="" class="">'+
            '<a href="#" class="link-arrow link-arrow-bottom" data-toggle="dropdown">Services</a>'+
            '<ul class="dropdown-menu dropdown-menu-right">'+
              // '<li><a href="soundcloud-plays.html">SoundCloud Plays</a></li>'+
              // '<li><a href="soundcloud-reposts.html">SoundCloud Reposts</a></li>'+
              '<li><a href="bangerlist.html">SoundCloud Reposts</a></li>'+
            '</ul>'+
          '</ul>'+
         '</div>'+
      '</ul>'+
   '</div>'+
   '<div class="navbar-desktop-menu navbar-desktop-menu-right nav-login-menu">'+
      '<ul>'+
         '<li><a id="btn-log-in" href="sign-in.html">Log in</a></li>'+
         '<li class="visible-xs visible-sm">'+
            '<a href="sign-up.html">Sign up</a>'+
         '</li>'+
         '<li class="hidden-xs hidden-sm">'+
            '<a href="sign-up.html"><button id="btn-sign-up" href="sign-up.html" window.location.href="sign-up.html" class="btn btn-plain btn-primary-new">Sign up</button></a>'+
         '</li>'+
      '</ul>'+
   '</div>'+


//start LOGGED IN using class nav-account-menu-in
   '<div class="navbar-desktop-menu navbar-desktop-menu-right nav-account-menu">'+

					'<ul>'+
						'<li id="account-name-2" class="">'+
							'<a href="#" id="account-name" class="link-arrow link-arrow-bottom" data-toggle="dropdown">@@@</a>'+
							'<ul class="dropdown-menu dropdown-menu-right">'+

		'<li><a href="profile.html">Profile</a></li>'+
		'<li>'+
			'<a href="#" onclick="firebase.auth().signOut();">Log out</a>'+
		'</li>'+

'</ul>'+

						'</li>'+
					'</ul>'+
			'</div>'+
//end of not sure why not working


'</div>'
;

document.getElementById("navMenuFooter").innerHTML =
'<footer>'+
  '<div class="container">'+

    '<div class="row">'+
      '<div class="col-md-12 text-center">'+
        '<p>Copyright © 2017 SocialMediaBOT. All Rights Reserved.</p>'+
      '</div>'+
    '</div>'+

    '<br>'+

    '<div class="row">'+
      '<div class="col-md-12 menu-cont text-center">'+
        '<ul>'+
          '<li class="">'+
          '<a href="index.html" >Home</a>'+
          '</li>'+
          '<li class="">'+
          '<a href="bots.html" >Bots</a>'+
          '</li>'+
          '<li class="">'+
          '<a href="download.html" >Download</a>'+
          '</li>'+
          '<li class="">'+
            '<a href="tos.html" >Terms of Service</a>'+
          '</li>'+
          '<li class="">'+
            '<a href="privacy.html" >Privacy Policy</a>'+
          '</li>'+
        '</ul>'+
      '</div>'+
    '</div>'+

    '<div class="row">'+
      '<div class="col-md-12 menu-cont text-center">'+
        '<ul>'+
          '<li class="">'+
          '<a href="mailto:asd@gmail.com">socialMediaBot@Gmail.com</a>'+
          '</li>'+
      '</div>'+
    '</div>'+


  '</div>'+
'</footer>'
;
