(function() {
  $(document).ready(function(){
    var auto_data = $(".auto-data");
    var data = {};
    var append_data;
    for (var i = 1; i <= 100; i++) {
      if (i%3 === 0 && i%5 === 0) {
        data = "A/B Testing";
      }else if(i%5 === 0){
        data = "Testing";
      }else if(i%3 === 0){
        data = "A/B";
      }else{
        data = i;
      }
      append_data = "<li>"+i+" : "+data+"</li>";
      $(auto_data).append(append_data);
    }
  });
})();
