////////////////////////////////////////////////////////////
////////////////////   USER INTERFACE   ////////////////////
////////////////////////////////////////////////////////////
$(function() {
  $(".quantity").on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    $("#quantityInput").text(valueSelected);
    $("#priceInput").text("$" + (valueSelected * 20) + ".00");
  });
});
