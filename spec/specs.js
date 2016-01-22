describe ("pingPong", function () {
  it("will list out all the numbers between 1 and userInput", function() {
    expect(pingPong(5)).to.eql([1, 2, 3, 4, 5])
  })

  it ("will replace any number divisible by 3 with the word 'ping'", function() {
    expect(pingPong(6)).to.eql([1, 2, "ping", 4, 5, "ping"])
  });

  it ("will replace any number divisible by 5 with the word 'pong'", function() {
    expect(pingPong(10)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong"])
  });

  it ("will replace any number divisible by 15 with the word 'ping pong'", function() {
    expect(pingPong(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping pong"])
  });

});
