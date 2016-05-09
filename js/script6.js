(function loadData() {
  $(document).ready(function(){
    $.getJSON("recs.txt", handleData);
    function handleData(data) {
      // data = JSON.parse(data);
      console.log(data);
    }
  });
})();
