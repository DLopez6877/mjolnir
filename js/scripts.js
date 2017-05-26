////////////////////////////////////////////////////////////
////////////////////   USER INTERFACE   ////////////////////
////////////////////////////////////////////////////////////
$(function() {
  function resetFields() {
    $("input#name").val("");
    $("input#address").val("");
    $("input#phone").val("");
    $("input#email").val("");
  }

  $(".quantity").on('change', function (e) {
    var optionSelected = $("option:selected", this);
    var valueSelected = this.value;
    $("#quantityInput").text(valueSelected);
    $("#priceInput").text("$" + (valueSelected * 20) + ".00");
  });

  $("form.form1").submit(function(e) {
    e.preventDefault();
    resetFields();
    alert("Sorry this is not a real product.")
  });
});
