(function() {
  $(document).ready(function(){
    $(".content").on("click", ".hide-header", hideHeader);
    function hideHeader() {
      $(".header").toggle("slow");
    }
  });
})();
