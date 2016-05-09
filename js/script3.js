(function() {
  $(document).ready(function(){
    $(".content").on("click", ".hide-footer", hideFooter);
    function hideFooter() {
      $(".footer").toggle("slow");
    }
  });
})();
