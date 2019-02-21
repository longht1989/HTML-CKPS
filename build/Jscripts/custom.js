/* ====================================
   Onload functions
   ==================================== */
$(function() {
    var minHeight = window.outerHeight;
    var currentHeight = $('body').outerHeight();
    console.log(minHeight);
    console.log(currentHeight);
    if (currentHeight <= minHeight) {
        $('.site-footer').addClass('pinned');
    }
});