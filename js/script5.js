(function(){
  var sale_price_list = document.getElementsByClassName("salePrice");
  var list_price_list = document.getElementsByClassName("listPrice");
  var price_story_list = document.getElementsByClassName("priceStory");
  var sale_price_value = {};
  var list_price_value = {};
  var price_story = {};
  if(sale_price_list.length !== list_price_list.length){
    alert("Number of elements is not the same");
  }else{
    try{
      for (var i = 0; i < sale_price_list.length; i++) {
        sale_price_value = parseFloat(sale_price_list[i].innerHTML);
        list_price_value = parseFloat(list_price_list[i].innerHTML);
        if (isNaN(sale_price_value)) {
          sale_price_value = 0;
        }
        if (isNaN(list_price_value)) {
          list_price_value = 0;
        }
        if (sale_price_value > list_price_value || sale_price_value === 0) {
          // product is not on sale
          price_story_list[i].innerHTML = list_price_value;
        }
        if (sale_price_value < list_price_value || list_price_value === 0) {
          // product is on sale
          price_story_list[i].innerHTML = sale_price_value;
        }
      }
    }catch(e){
      alert(e);
    }
  }

})();
