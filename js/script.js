<audio id="audio" src="http://freesound.org/data/previews/119/119900_1990698-lq.mp3" autostart="false"></audio>

function playSound() {
  var sound = document.getElementById("audio");
  sound.play();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(window).scroll(function() {
var theta = $(window).scrollTop()/100.0 % (Math.PI*4.5);
$('#spincap').css({ transform: 'rotate(-' + theta + 'rad)' });
});


$(document).ready(function(){
    $('.img-zoom').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });
  });
