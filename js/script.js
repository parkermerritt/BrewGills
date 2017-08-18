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


// Attempting bottlecap bend + sound with JavaScript
function pressMediaCap() {
  document.getElementById("media-cap").src = "img/BentMediaCapV2.png";

  // Initiate bottle-cap sound effect
  var audio = document.getElementById("audio");
  audio.play();

  setTimeout(navigateToMedia, 600);
}

function pressMerchCap() {
  document.getElementById("merch-cap").src = "img/BentMerchCapV2.png";

  // Initiate bottle-cap sound effect
  var audio = document.getElementById("audio");
  audio.play();

  setTimeout(navigateToMerch, 600);
}

function navigateToMedia() {
  window.location.assign("media.html")
}

function navigateToMerch() {
  window.location.assign("merch.html")
}
