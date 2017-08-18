/* --- START OF PLAIN JAVASCRIPT --- */
// Bottlecap bend + sound with JavaScript
function pressMediaCap() {
  document.getElementById("media-cap").src = "img/BentMediaCapV2.png";
  // Initiate bottle-cap sound effect
  var audio = document.getElementById("audio");
  audio.play();
  // Delay navigation to Media Page
  setTimeout(navigateToMedia, 600);
}

function pressMerchCap() {
  document.getElementById("merch-cap").src = "img/BentMerchCapV2.png";
  // Initiate bottle-cap sound effect
  var audio = document.getElementById("audio");
  audio.play();
  // Delay navigation to Merch Page
  setTimeout(navigateToMerch, 600);
}

function navigateToMedia() {
  window.location.assign("media.html")
}

function navigateToMerch() {
  window.location.assign("merch.html")
}
// End of bottlecap


// Start of Header Slideshow
var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 4500); // Change image every 4.5 seconds
}
// End of Header Slideshow
/* --- END OF PLAIN JAVASCRIPT --- */


/* --- START OF JQUERY --- */
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// White bottlecap spinning effect
$(window).scroll(function() {
  var theta = $(window).scrollTop()/100.0 % (Math.PI*4.5);
  $('#spin-cap').css({ transform: 'rotate(-' + theta + 'rad)' });
});


// Zoom-in effect for certain images on hover
$(document).ready(function() {
  $('.img-zoom').hover(function() {
    $(this).addClass('transition');
  }, function() {
    $(this).removeClass('transition');
  });
});
/* --- END OF JQUERY --- */
