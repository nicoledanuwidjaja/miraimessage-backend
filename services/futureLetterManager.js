const admin = require('firebase-admin');

let serviceAccount = require('./serviceAccountKeys.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://future-letters.firebaseio.com"
});

let db = admin.firestore();
let users = db.collection("users");
let letters = db.collection("letters");

exports.getShit = function() {
    letters.doc('cyqoSsCGZ8YJeJ5v3kvX').get()
        .then(doc => {
            if (!doc.exists) {
                console.log('No such letter!');
            } else {
                console.log(doc.data());
                console.log("Hello!");
                return 'hi';
            }
        })
        .catch(err => {
            console.log('Error getting letter ', err);
        });
};


// __________________USER METHODS__________________

// creates a user with the given JSON's information
exports.createUser = function(json) {
    users.add({
        email: json['email'],
        letters: [],
        receivedLetters: []
    }).then(user => {
        console.log('Added user with ID: ', user.id)
    })
};

// gets a user with the given JSON's id
exports.getUser = function(json) {
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
};

// gets the letters written by user with the given email
exports.getLetters = function(email) {
    const letterArray = [];
    users.where('email', '==', email).get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            letterArray.push(doc.data());
        });
        console.log(letterArray);
        return letterArray;
    })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
};

// gets the received letters of the user with the given email
exports.getReceivedLetters = function(email) {
    users.where('email', '==', email).get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                return doc.data()['receivedLetters'];
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
};

// updates a user with the given JSON's id with the JSON's info
exports.updateUser = function(json) {
    users.doc(json['id']).set(json, {merge: true})
        .then(() => {
            console.log('Updated user');
        })
        .catch(err => {
            console.log('Error updating user ', err)
        })
};

// update the user with the given JSON's id to have the given email
exports.updateEmail = function(json) {
    users.doc(json['id']).update({"email" : json['email']})
        .then(() => {
            console.log('Updated email ', id);
        })
        .catch(() => {
            console.log("Error updating email", id);
        })
};

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
exports.addOwnLetterToUser = function(json) {
    addLetterToUser(json, 'letters');
};

// insert received letter to the user
exports.addReceivedLetterToUser = function(json) {
    addLetterToUser(json, "receivedLetters");
};

// delete this user from existence
exports.deleteUser = function(json) {
    users.doc(json['id']).delete()
        .then(() => {
            console.log('Deleted user ', json['id']);
        })
        .catch(err => {
            console.log('Error deleting user ', err);
        })
};




// __________________LETTER METHODS__________________
// create a letter
exports.createLetter = function(json) {
    letters.add({
        body: json['body'],
        header: json['header'],
        tags: json['tags'],
        timeCreated: json['timeCreated'],
        timeDeliver: json['timeDeliver']
    }).then(ref => {
        console.log('Added letter with ID: ', ref.id)
    })
};

// get a letter based on letter id
exports.getLetter = function(json) {
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
};

// delete a letter based on letter id
exports.deleteLetter = function(json) {
    letters.doc(json['id']).delete()
        .then(() => {
            console.log('Deleted letter ', id);
        })
        .catch(err => {
            console.log('Error deleting user ', err);
        })
};

// get the reply letters to a given letter id
exports.getReplyLetter = function(json) {
    return letters.doc(json['id']).get().get('replyLetters');
};
