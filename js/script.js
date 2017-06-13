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


