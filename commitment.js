// document.getElementById('hover-info').style.display="hidden";
// document.getElementbyId('hover-info').onclick=function{
// 	document.getElementById('hover-info').style.display="visible";
// }
// Code found on W3 Schools https://www.w3schools.com/w3css/w3css_slideshow.asp

// var slideIndex = 0;
// _slideshow();

// function _slideshow() {
// 	var i;
// 	var x = document.getElementsByClassName("slide");
// 	for (i = 0; i < x.length; i++) {
// 	x[i].style.display = "none";
// 	}
// 	slideIndex++;
// 	if (slideIndex > x.length) {slideIndex = 1}
// 	x[slideIndex-1].style.display = "block";
// 	setTimeout(_slideshow, 2000);
// }
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);