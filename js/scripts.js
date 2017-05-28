
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
    var valueSelected = this.value;
    var price = Math.round((valueSelected * 19.95)*100)/100;
    var shipping = Math.round((valueSelected * 5.65)*100)/100;

    $("#quantityInput").text(valueSelected);
    $("#shipping").text("$" + shipping);
    $("#priceInput").text("$" + price);
    $("#totalPrice").text("$" + (price + shipping + "0"));

    if (valueSelected === "2" || valueSelected === "4") {
      $("#shipping").text("$" + shipping + "0");
      $("#priceInput").text("$" + price + "0");
    }

    if (valueSelected != 1) {
      $("#quantityFree").text("1");
    } else {
      $("#quantityFree").text("0");
    }
  });

  $("form.form1").submit(function(e) {
    e.preventDefault();
    resetFields();
    alert("Sorry this is not a real product.")
  });

  (function countdown(remaining) {
    var minutes = 10;
    if (remaining >= 0) {
      setTimeout(function(){ countdown(remaining - 1); }, 1000);
      document.getElementById('seconds').innerHTML = remaining;
      if (document.getElementById('seconds').innerHTML.length <= 1) {
        document.getElementById('seconds').innerHTML = "0" + remaining;
      }
    } else {
      minutes = minutes - 1;
      document.getElementById('minutes').innerHTML = minutes;
      countdown(remaining = 59);
    }
  })(0);
});
