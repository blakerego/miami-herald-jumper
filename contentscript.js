
(function() {
  setTimeout(function() {
    var ppUI = document.getElementById('ppUI');
    if (ppUI !== null) {
      ppUI.remove();
    }
    var pressplusOverlay = document.getElementById('pressplusOverlay');
    if (pressplusOverlay !== null) {
      pressplusOverlay.remove();
    }
    
  }, 3000);

})();
