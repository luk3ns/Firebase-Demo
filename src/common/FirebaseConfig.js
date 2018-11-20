import firebase from 'firebase';

var config = {
    apiKey: "apiKey",
    authDomain: "authDomain",
    databaseURL: "databaseURL",
    projectId: "projectId",
    storageBucket: "storageBucket",
    messagingSenderId: "messagingSenderId"
};

const firebaseApp = firebase.initializeApp(config);

firebaseApp.auth().signInWithEmailAndPassword('email', 'password').catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(`Error: ${errorCode}, ${errorMessage}`);
    // ...
});

firebaseApp.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log(user);
    } else {
        console.log('niezalogowany');
    }
  });

export const db = firebaseApp.firestore();
// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});

//Upload Files
export const storage = firebaseApp.storage().ref();
