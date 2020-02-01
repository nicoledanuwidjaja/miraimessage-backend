var firebase = require("firebase/app");
// require("firebase/firestore");
const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();
let users = db.collection("users");
let letters = db.collection("letters");

// __________________USER METHODS__________________

// creates a user with the given JSON's information
function createUser(json) {
    users.add({
        email: json['email'],
        letters: json['letters'],
        receivedLetters: json['receivedLetters']
    }).then(user => {
        console.log('Added user with ID: ', user.id)
    })
}

// gets a user with the given JSON's id
function getUser(json) {
    users.doc(json['id']).get()
        .then(ref => {
            if (!ref.exists) {
                console.log('No such user!');
            } else {
                console.log('User data:', ref.data());
                return ref.data();
            }
        })
        .catch(err => {
            console.log('Error getting user ', err);
        });
}

// gets the letters written by user with the given JSON's email
function getLetters(json) {
    let queryResult = users.where('email', '==', json['email']).get();
    return queryResult.docs.get(0).data()['letters'];
}

// gets the received letters of the user with the given JSON's email
function getReceivedLetters(json) {
    let queryResult = users.where('email', '==', json['email']).get();
    return queryResult.docs.get(0).data()['receivedLetters'];
}

// updates a user with the given JSON's id with the JSON's info
function updateUser(json) {
    users.doc(json['id']).set(json, {merge: true})
        .then(() => {
            console.log('Updated user');
        })
        .catch(err => {
            console.log('Error updating user ', err)
        })
}

// update the user with the given JSON's id to have the given email
function updateEmail(json, email) {
    users.doc(json['id']).update({"email" : email})
        .then(() => {
            console.log('Updated email ', id);
        })
        .catch(err => {
            console.log("Error updating email", id);
        })
}

// update the user with the given JSON's id to make the given field match the given JSON
function addLetterToUser(json, field) {
    users.doc(json['id']).update(field, json['letters'])
        .then(() => {
            console.log('Updated letter for user ', json['id']);
        })
        .catch(err => {
            console.log('Error adding letter', err);
        })
}

// insert own letter to the user
function addOwnLetterToUser(json) {
    addLetterToUser(json, 'letters');
}

// insert received letter to the user
function addReceivedLetterToUser(json) {
    addLetterToUser(json, "receivedLetters");
}

// delete this user from existence
function deleteUser(json) {
    users.doc(json['id']).delete()
        .then(() => {
            console.log('Deleted user ', json['id']);
        })
        .catch(err => {
            console.log('Error deleting user ', err);
        })
}




// __________________LETTER METHODS__________________
// create a letter
function createLetter(json) {
    letters.add({
        body: json['body'],
        header: json['header'],
        tags: json['tags'],
        timeCreated: json['timeCreated'],
        timeDeliver: json['timeDeliver']
    }).then(ref => {
        console.log('Added letter with ID: ', ref.id)
    })
}

// get a letter based on letter id
function getLetter(json) {
    users.doc(json['id']).get()
        .then(letter => {
            if (!letter.exists) {
                console.log('No such letter!');
            } else {
                console.log('Letter data:', letter.data());
                return letter.data();
            }
        })
        .catch(err => {
            console.log('Error getting letter', err);
        });
}

// delete a letter based on letter id
function deleteLetter(json) {
    letters.doc(json['id']).delete()
        .then(() => {
            console.log('Deleted letter ', id);
        })
        .catch(err => {
            console.log('Error deleting user ', err);
        })
}

// get the reply letters to a given letter id
function getReplyLetter(json) {
    return letters.doc(json['id']).get().get('replyLetters');
}




// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyCq3s56kbsHNKn5doMWi8vC5ZQVh70C-wA",
//     authDomain: "future-letters.firebaseapp.com",
//     databaseURL: "https://future-letters.firebaseio.com",
//     projectId: "future-letters",
//     storageBucket: "future-letters.appspot.com",
//     messagingSenderId: "748276291133",
//     appId: "1:748276291133:web:d9b8d30e69bfa6459d7c54",
//     measurementId: "G-G2N77PN9MT",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);