// document.getElementById('hover-info').style.display="hidden";
// document.getElementbyId('hover-info').onclick=function{
// 	document.getElementById('hover-info').style.display="visible";
// }
// Code found on W3 Schools https://www.w3schools.com/w3css/w3css_slideshow.asp

var slideIndex = 0;
slideshow();

function slideshow() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(slideshow, 2000);
}