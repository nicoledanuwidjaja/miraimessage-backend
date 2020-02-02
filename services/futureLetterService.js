const futureLetterManager = require('./futureLetterManager.js');
const errorMsg = 'Failed Action: Required field does not exist';

module.exports.createUser = function(req, res) {
    const json = req.body;
    if (json['email']) {
        futureLetterManager.createUser(json);
        res.send("Successfully created an account!")
    } else {
        res.send(errorMsg)
    }
};

module.exports.getUser = function(req, res) {
    const json = req.body;
    if (json['id']) {
        res.send(futureLetterManager.getUser(json))
    } else {
        res.send(errorMsg)
    }
};

module.exports.getLetters = function(req, res) {
  const json = req.body;
  if (json['email']) {
      res.send(futureLetterManager.getLetters(json))
  } else {
      res.send(errorMsg)
  }
};

module.exports.getReceivedLetters = function(req, res) {
    const json = req.body;
    if (json['email']) {
        res.send(futureLetterManager.getReceivedLetters(json))
    } else {
        res.send(errorMsg)
    }
};

module.exports.updateUser = function(req, res) {
    const json = req.body;
    if (json['id']) {
        futureLetterManager.updateUser(json);
        res.send('Successfully updated your account!')
    } else {
        res.send(errorMsg)
    }
};

module.exports.updateEmail = function(req, res) {
    const json = req.body;
    if (json['id'] && json['email']){
        futureLetterManager.updateEmail(json);
        res.send('Successfully updated your email!')
    } else {
        res.send(errorMsg)
    }
};

module.exports.addOwnLetterToUser = function(req, res) {
    const json = req.body;
    if (json['id'] && json['letters']) {
        futureLetterManager.addOwnLetterToUser(json);
        res.send('Successfully added letters!')
    } else {
        res.send(errorMsg)
    }
};

module.exports.addReceivedLetterToUser = function(req, res) {
    const json = req.body;
    if (json['id'] && json['receivedLetters']) {
        futureLetterManager.addReceivedLetterToUser(json);
        res.send('Successfully added letters!')
    } else {
        res.send(errorMsg)
    }
};

module.exports.deleteUser = function(req, res) {
    const json = req.body;
    if (json['id']) {
        futureLetterManager.deleteUser(json);
        res.send('Deleted User Successfully')
    } else {
        res.send(errorMsg)
    }
};

module.exports.createLetter = function(req, res) {
    const json = req.body;
    if (json['body']
    && json['header']
    && json['tags']
    && json['timeCreated']
    && json['timeDeliver']) {
        futureLetterManager.createLetter(json);
        res.send("Successfully made a letter!")
    } else {
        res.send(errorMsg)
    }
};

module.exports.getLetter = function(req, res) {
    const json = req.body;
    if (json['id']) {
        res.send(futureLetterManager.getLetter())
    } else {
        res.send(errorMsg)
    }
};

module.exports.deleteLetter = function(req, res) {
    const json = req.body;
    if (json['id']) {
        futureLetterManager.deleteLetter(json);
        res.send('Deleted Letter')
    } else {
        res.send(errorMsg)
    }
};

module.exports.getReplyLetter = function(req, res) {
    const json = req.body;
    if (json['id']) {
        res.send(futureLetterManager.getReplyLetter(json))
    } else {
        res.send(errorMsg)
    }
};
