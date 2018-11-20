import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC_RXiPrF2ueUeYqMpXRKkHM8IwkQg3s_Y",
    authDomain: "test-48f35.firebaseapp.com",
    databaseURL: "https://test-48f35.firebaseio.com",
    projectId: "test-48f35",
    storageBucket: "test-48f35.appspot.com",
    messagingSenderId: "295060481422"
};

const firebaseApp = firebase.initializeApp(config);

firebaseApp.auth().signInWithEmailAndPassword('it@ozparts.eu', 'asdasd1').catch(function (error) {
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
