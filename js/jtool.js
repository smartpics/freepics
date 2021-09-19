$(document).ready(function() {resizeMe();});
$(window).resize(function() {resizeMe();});
function resizeMe() {
var curwidth = $(window).width();
boxes = $('.tddesc');
maxHeight = Math.max.apply(Math, boxes.map(function() {
var totalHeight = 0;
$(this).children().each(function() {
totalHeight += $(this).height(); 
});
return totalHeight;
}).get());
$('.tddesc').height(maxHeight+"px");
}