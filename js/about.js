$('#ownerBtnShow1').click(function(){
    $('#owner1').show();
})

$('#ownerBtnHide1').click(function(){
    $('#owner1').hide();
})

// 

$('#ownerBtnShow2').click(function(){
    $('#owner2').show();
})

$('#ownerBtnHide2').click(function(){
    $('#owner2').hide();
})

// 

$('#ownerBtnShow3').click(function(){
    $('#owner3').show();
})

$('#ownerBtnHide3').click(function(){
    $('#owner3').hide();
})

// 

$('#ownerBtnShow4').click(function(){
    $('#owner4').show();
})

$('#ownerBtnHide4').click(function(){
    $('#owner4').hide();
})

// bact to top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}