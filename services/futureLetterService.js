const futureLetterManager = require('./futureLetterManager.js');
const errorMsg = 'Failed Action: Required field does not exist';

module.exports.getShit = function(req, res) {
    res.send(futureLetterManager.getShit());
};

module.exports.createUser = function(req, res) {
    const json = req.body;
    if (json['email']) {
        futureLetterManager.createUser(json);
        res.status(200).send("Successfully created an account!")
    } else {
        res.status(404).send(errorMsg)
    }
};

module.exports.getUser = function(req, res) {
    const json = req.body;
    if (json['id']) {
        res.status(200).send(futureLetterManager.getUser(json))
    } else {
        res.status(404).send(errorMsg)
    }
};

module.exports.getLetters = function(req, res) {
  const json = req.body;
  if (json['email']) {
      res.status(200).send(futureLetterManager.getLetters(json))
  } else {
      res.status(404).send(errorMsg)
  }
};

module.exports.getReceivedLetters = function(req, res) {
    const json = req.body;
    if (json['email']) {
        res.status(200).send(futureLetterManager.getReceivedLetters(json))
    } else {
        res.status(404).send(errorMsg)
    }
};

module.exports.updateUser = function(req, res) {
    const json = req.body;
    if (json['id']) {
        futureLetterManager.updateUser(json);
        res.status(200).send('Successfully updated your account!')
    } else {
        res.status(404).send(errorMsg)
    }
};

module.exports.updateEmail = function(req, res) {
    const json = req.body;
    if (json['id'] && json['email']){
        futureLetterManager.updateEmail(json);
        res.status(200).send('Successfully updated your email!')
    } else {
        res.status(404).send(errorMsg)
    }
};

module.exports.addOwnLetterToUser = function(req, res) {
    const json = req.body;
    if (json['id'] && json['letters']) {
        futureLetterManager.addOwnLetterToUser(json);
        res.status(200).send('Successfully added letters!')
    } else {
        res.status(404).send(errorMsg)
    }
};

module.exports.addReceivedLetterToUser = function(req, res) {
    const json = req.body;
    if (json['id'] && json['receivedLetters']) {
        futureLetterManager.addReceivedLetterToUser(json);
        res.status(200).send('Successfully added letters!')
    } else {
        res.status(404).send(errorMsg)
    }
};

module.exports.deleteUser = function(req, res) {
    const json = req.body;
    if (json['id']) {
        futureLetterManager.deleteUser(json);
        res.status(200).send('Deleted User Successfully')
    } else {
        res.status(404).send(errorMsg)
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
        res.status(200).send("Successfully made a letter!")
    } else {
        res.status(404).send(errorMsg)
    }
};

module.exports.getLetter = function(req, res) {
    const json = req.body;
    if (json['id']) {
        res.status(200).send(futureLetterManager.getLetter())
    } else {
        res.status(404).send(errorMsg)
    }
};

module.exports.deleteLetter = function(req, res) {
    const json = req.body;
    if (json['id']) {
        futureLetterManager.deleteLetter(json);
        res.status(200).send('Deleted Letter')
    } else {
        res.status(404).send(errorMsg)
    }
};

module.exports.getReplyLetter = function(req, res) {
    const json = req.body;
    if (json['id']) {
        res.status(200).send(futureLetterManager.getReplyLetter(json))
    } else {
        res.status(404).send(errorMsg)
    }
};
