import {storage } from './FirebaseConfig.js';

export function uploadFile(file, folder) {
    const name = file.name;
    const metadata = { contentType: file.type };
    const path = folder + '/' + name;

    const task = storage.child(path).put(file, metadata);
    return task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then((url) => {
            return url;
        })
        .catch(console.error);
}

export function deleteFile(path) {
    //patch: full file path ex. csv/file.csv
    var desertRef = storage.child(path);
    desertRef.delete().then(function () {
        console.log('File successfully deleted!');
    }).catch(function (error) {
        console.error('Error removing file: ', error);
    });
}
