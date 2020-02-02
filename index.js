const functions = require('firebase-functions');
const express = require('express');
const app = express();
const futureLetterService = require('./services/futureLetterService.js');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// get requests
app.get('/user/get', futureLetterService.getUser);
app.get('/user/get/letter', futureLetterService.getLetters);
app.get('/user/get/receivedLetters', futureLetterService.getReceivedLetters);
app.get('/user/get/replyLetter', futureLetterService.getReplyLetter);
app.get('/letter/get', futureLetterService.getLetter);

// post requests
app.get('/user/create', futureLetterService.createUser);
app.get('/letter/create', futureLetterService.createLetter);

// put requests
app.get('/user/update/email', futureLetterService.updateEmail);
app.get('/user/update/user', futureLetterService.updateUser);
app.get('/user/update/ownLetter', futureLetterService.addOwnLetterToUser);
app.get('/user/update/receivedLetter', futureLetterService.addReceivedLetterToUser);

// delete requests
app.get('/user/delete', futureLetterService.deleteUser);
app.get('/letter/delete', futureLetterService.deleteLetter);

exports.app = functions.https.onRequest(app);