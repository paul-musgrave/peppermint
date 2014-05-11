window.fbAsyncInit = function() {
  FB.init({
    appId      : '649747235105241',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.0' // use version 2.0
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
	FB.getLoginStatus(function(response) {
	  statusChangeCallback(response);
	});
}

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
    	FB.api(
		    "/me",
		    function (response) {
		      if (response && !response.error) {
		        window['userName'] = response.name;
      			console.log('name:' + response.name);
		      }
		    }
		);

    	FB.api(
		    "/me/picture",
		    function (response) {
		      if (response && !response.error) {
		        window['facebookProfilePictureUri'] = response.url;
		        console.log('picture: ' + response.url);
		      }
		    }
		);

      $('.modal-body').html($('#modalSecondScreen').html());
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      $('#errors').append('<p>Please log into this app.</p>');
      // console.log('got here');
      // $('.modal').modal('hide');
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      $('#errors').append('<p>Please log into Facebook.</p>');
    }
}

function checkLoginState() {
	FB.getLoginStatus(function(response) {
	  statusChangeCallback(response);
	});
}

$(document).ready(function() {
	FB.init();
});

 function completeSignUp() {
	var userType = $('#userTypeSelect').val();
	window['userType'] = userType;

	console.log('type: ' + userType);

	$('.modal').modal('hide');

	$('#signiUpModalLink').remove();
	$('#logo').after('<h3 id="userMessage">'+ window['userName'] +'</h3>')
}