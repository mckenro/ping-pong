//Backend
var pingPongCounter = function(number) {
  var result = [];
  var number = parseInt(number);
  var start = 1;
  for (i=0;i<number;i++) {
    result.push(start++);
  }
  result.map(function(index) {
    if (result[index] % 15 === 0){
      result[index] = "ping-pong";
    }else if (result[index] % 5 === 0){
      result[index] = "pong";
    }else if (result[index] % 3 === 0){
      result[index] = "ping";
    }
  });
  return result;
}

//Frontend
$(document).ready(function () {
  $("form#numberSubmit").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#submitField").val();
    var result = pingPongCounter(userInput);
    result.forEach(function(index) {
      $("ul#pingPong").append("<li>" + index + "</li>");
    })
  });
});
