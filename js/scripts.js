$(document).ready(function(){
  $("#iceCreamImage").click(function(){
    var icecreamList =["Vanilla","Chocolate","Cookies & cream"];
    icecreamList.forEach(function(icecream){
      console.log(icecream);
    var list = $(".flavorList ul");
    $("<li></li>").html(icecream).appendTo(list);
    $(".flavorList").show();
    });
  });

});