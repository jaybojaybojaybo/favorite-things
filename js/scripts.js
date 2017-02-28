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

  $('li#special').text(output[3]);


  // $("#favorites").text(array);
    });
  });
