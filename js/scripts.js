//Backend
var pingPongCounter = function(number) {
  var result = [];
  var number = parseInt(number);
  var start = 1;
  for (i=0;i<number;i++) {
    result.push(start++);
  }
  console.log(result);

}

//Frontend
$(document).ready(function () {
  $("form#numberSubmit").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#submitField").val();
    var result = pingPongCounter(userInput);
    $("ul#pingPong").append(result);
  });
});
