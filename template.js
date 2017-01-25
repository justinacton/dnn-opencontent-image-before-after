$(window).load(function(){
  $(".twentytwenty-horizontal").twentytwenty({
    default_offset_pct: 0.5, // How much of the before image is visible when the page loads
    orientation: 'horizontal' // Orientation of the before and after images ('horizontal' or 'vertical')
  });
  $(".twentytwenty-vertical").twentytwenty({
    default_offset_pct: 0.5, // How much of the before image is visible when the page loads
    orientation: 'vertical' // Orientation of the before and after images ('horizontal' or 'vertical')
  });
});