// const functions = require('firebase-functions');
const cors = require('cors');
const express = require('express');
const app = express();
const futureLetterService = require('./services/futureLetterService.js');
const bodyParser = require("body-parser");

app.use(cors({origin: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/haha', futureLetterService.getShit);

// get requests
app.get('/:user/get', futureLetterService.getUser);
app.get('/:user/get/letter', futureLetterService.getLetters);
app.get('/:user/get/receivedLetters', futureLetterService.getReceivedLetters);
app.get('/:user/get/replyLetter', futureLetterService.getReplyLetter);
app.get('/letter/get', futureLetterService.getLetter);

// post requests
app.post('/:user/create', futureLetterService.createUser);
app.post('/:letter/create', futureLetterService.createLetter);

// put requests
app.put('/:user/update/email', futureLetterService.updateEmail);
app.put('/:user/update/user', futureLetterService.updateUser);
app.put('/:user/update/ownLetter', futureLetterService.addOwnLetterToUser);
app.put('/:user/update/receivedLetter', futureLetterService.addReceivedLetterToUser);

// delete requests
app.delete('/user/delete', futureLetterService.deleteUser);
app.delete('/letter/delete', futureLetterService.deleteLetter);

// exports.app = functions.https.onRequest(app);

app.listen(9000, () => console.log(`Example app listening on port ${9000}!`))
