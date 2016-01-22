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
