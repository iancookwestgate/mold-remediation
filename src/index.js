import './scss/normalize.scss';
// import 'bootstrap';
import './scss/input.scss';
import $ from 'jquery';

var slideIndex = 1;
showSlides(slideIndex);
// rotate();
$(".prev").click(function(){
  plusSlides(slideIndex--);
});

$(".next").click(function(){
  plusSlides(slideIndex++);
});

function plusSlides(n) {
  showSlides(slideIndex);
}

$(".pic1").click(function() {
  currentSlide(1);
})

$(".pic2").click(function() {
  currentSlide(2);
})

$(".pic3").click(function() {
  currentSlide(3);
})
// function rotate() {
//   setInterval(function() {
//     plusSlides(slideIndex++);
//   }, 5000);
// }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "grid";
  dots[slideIndex-1].className += " active";
}
