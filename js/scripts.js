$(document).ready(function(event) {
  $("#submit").click(function() {
    var zodiac = $("#zodiac").val();
    var flavor = $("#iceCream").val();

    if ((zodiac === "aries" || zodiac ==="taurus") && flavor === "vanilla") {
        $("#harry").show();
        $("#ron").hide();
        $("#hermione").hide();
        $("#hagrid").hide();
    } else if ((zodiac === "leo" || zodiac === "virgo" || zodiac === "libra") && flavor === "mint") {
       $("#ron").show();
       $("#harry").hide();
       $("#hermione").hide();
       $("#hagrid").hide();
    } else if ((zodiac === "capricorn" || zodiac === "aquarius" || zodiac === "pisces") && (flavor === "chocolate" || flavor === "vanilla")) {
      $("#hermione").show();
      $("#harry").hide();
      $("#ron").hide();
      $("#hagrid").hide();
    } else {
      $("#hagrid").show();
      $("#harry").hide();
      $("#ron").hide();
      $("#hermione").hide();
    }
  });
  // event.preventDefault();
});
