var timer = null;
var element = document.getElementById("mobile_sticky_cta-container");
// Start: Function to return current browser window dimensions
var browser_size = function(e) {
   var dimensions = {width: window.innerWidth || document.body.clientWidth, height: window.innerHeight || document.body.clientHeight};
   return dimensions;
}
// End: Function to return current browser window dimensions

// Start: Code for showing CTA and logo when scrolling stops under 992px
window.onscroll = function (e) {
    if(timer !== null) {
        clearTimeout(timer);
    }

    if (browser_size().width < 992) {
      element.classList.remove("visible");
      timer = setTimeout(function() {
        element.classList.add("visible");
      }, 100);
    } else {
      element.classList.remove("visible");
    }
}
// End: Code for showing CTA and logo when scrolling stops under 992px
