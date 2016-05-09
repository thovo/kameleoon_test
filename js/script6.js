(function() {
  $(document).ready(function(){
    $.ajaxSetup({
      cache: false
    }); // fix for IE
    var url = "https://raw.githubusercontent.com/thovo/kameleoon_test/master/recs.txt";
    var data = {};
    if (window.XMLHttpRequest) {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if(xmlhttp.status == 200){
               data = JSON.parse(xmlhttp.responseText);
               handleData(data);
           }
           else if(xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('Something else other than 200 was returned');
           }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
   } 
    function handleData(data) {
      var data_as_viewed = data.placements[0];
      var data_as_bought = data.placements[1];
      var section_header_viewed = data_as_viewed.strategy_message;
      var section_header_bought = data_as_bought.strategy_message;
      $(".also-viewed .section-header h4").text(section_header_viewed);
      $(".also-bought .section-header h4").text(section_header_bought);
      var len_data_viewed = data_as_viewed.recs.length;
      var len_data_bought = data_as_bought.recs.length;
      var viewed_data = data_as_viewed.recs;
      var bought_data = data_as_bought.recs;
      var viewed_list = $(".also-viewed ul");
      var bought_list = $(".also-bought ul");
      addData(viewed_data, len_data_viewed, viewed_list);
      addData(bought_data, len_data_bought, bought_list);
    }
    function addData(data, data_length, target){
      for (var i = 0; i < data_length; i++) {
        var li = $("<li />",{
          "id" : data[i].pid
        });
        $(target).append(li);
        var thumbnail = $("<a />", {
          href: data[i].ct_url,
          target : "_blank",
          "class" : "thumbnail"
        });
        $(target).find("#"+data[i].pid).append(thumbnail);
        var img = $("<img />", {
          src: data[i].img,
          target : "_blank",
          alt : data[i].name
        });
        $(target).find("#"+data[i].pid).find(".thumbnail").append(img);
        var product_link = $("<a />", {
          href: data[i].ct_url,
          target : "_blank",
          "class" : "product-link"
        });
        $(target).find("#"+data[i].pid).append(product_link);
        $(target).find("#"+data[i].pid).find(".product-link").append("<span class='product-name'>"+data[i].name+"</span>");
        var product_price = $("<div />", {
          "class" : "product-price",
          text : data[i].price
        });
        $(target).find("#"+data[i].pid).append(product_price);
      }
    }
  });
})();
