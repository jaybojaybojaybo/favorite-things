$(document).ready(function() {

  $("form#inputs").submit(function(event) {
    event.preventDefault();


  var color = $("#color").val();
  var food = $("#food").val();
  var car = $("#car").val();
  var drink = $("#drink").val();
  var output = [color, food, car, drink];

  $("#outputs").text(output);

  var array = [];
  array.push(output[0]);
  array.push(output[3]);
  array.push(output[2]);

  $('#colorOutput').text(output[0]);
  $('#foodOutput').text(output[1]);
  $('#carOutput').text(output[2]);
  $('#drinkOutput').text(output[3]);



    });
  });
