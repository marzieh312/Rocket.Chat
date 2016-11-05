var messages = require('./messages.json')

module.exports = function(robot) {
  robot.enter(function(res) {
    for(var index in messages.introduction) {
        setTimeout(sendMessage(res, messages.introduction[index]), (index+1)*2000)
    }
    
  });

  return robot.hear(/open the (.*) doors/i, function(res) {
    return res.send("I'm afraid I can't let you do that.");
  });

};

function sendMessage(response, message) {
  return function() {
    return response.send(message)
  }
}
