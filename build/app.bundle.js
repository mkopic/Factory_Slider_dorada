/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
$(document).ready(function () {
  var sliderTop = $('.top-slider ul'),
      sliderBottom = $('.bottom-slider ul'),
      sliderImgTop = $('.top-slider li'),
      sliderImgBottom = $('.bottom-slider li'),
      counter = 1,
      sizeTop = sliderImgTop[0].clientWidth + 10,
      sizeBottom = sliderImgBottom[0].clientWidth + 10;
  $(".next").click(function () {
    if (counter <= sliderImgTop.length && counter <= sliderImgBottom.length) {
      sliderTop.animate({
        left: "+=" + sizeTop
      });
      sliderBottom.animate({
        left: "+=" + sizeBottom
      });
      sizeTop = sliderImgTop[counter].clientWidth + 10;
      sizeBottom = sliderImgBottom[counter].clientWidth + 10;
      counter++;
      if (counter < sliderImgTop.length && counter < sliderImgBottom.length) return;else {
        counter = 0;
        cloneSliderTop = sliderImgTop.clone().appendTo(sliderTop);
        cloneSlideBottom = sliderImgBottom.clone().appendTo(sliderBottom);
        cloneSliderTop.animate({
          left: "+=" + sizeTop
        });
        cloneSliderBottom.animate({
          left: "+=" + sizeBottom
        });
      }
    }
  });
  $(".prev").click(function () {
    if (counter > 1) {
      counter--;
      sizeTop = sliderImgTop[counter - 1].clientWidth + 10;
      sizeBottom = sliderImgBottom[counter - 1].clientWidth + 10;
      sliderTop.animate({
        left: "-=" + sizeTop
      });
      sliderBottom.animate({
        left: "-=" + sizeBottom
      });
    } else {
      var imagePrevTop = $('.top-slider ul li:first').before($('.top-slider ul li:last'));
      var imagePrevBottom = $('.bottom-slider ul li:first').before($('.bottom-slider ul li:last'));
      sizePrevTop = sliderImgTop[counter - 1].clientWidth;
      sizePrevBottom = imagePrevBottom[counter - 1].clientWidth + 10;
      imagePrevTop.animate({
        left: "-=" + sizePrevTop
      });
      imagePrevBottom.animate({
        left: "-=" + sizePrevBottom
      });
    }
  });
});
/******/ })()
;