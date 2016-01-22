var pingPong = function(userInput) {

  var finalResult = [];

  for (var i = 1; i <= userInput; i ++) {
    if ((i % 15) === 0) {
    finalResult.push("ping pong")
    }
    else if ((i % 5) === 0) {
    finalResult.push("pong")
    }
    else if ((i % 3) === 0) {
    finalResult.push("ping")
    }
    else {
      finalResult.push(i)
    }
  };
  return finalResult
};

$(document).ready(function(){
  $("form#pingPong").submit(function(event) {
    var userInput = parseInt($("input#userInput").val());
    var numberList = pingPong(userInput);

    $(".numberList").text(numberList);
    $(".result").show();
    event.preventDefault();
  });
});
