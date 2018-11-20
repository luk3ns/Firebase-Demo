import { db } from './FirebaseConfig.js';

export async function addRecord(collection, obj) {
    return db.collection(collection).add(obj)
        .then(function (doc) {
            console.log('Document written with ID: ', doc.id);
            return doc;
        })
        .catch(function (error) {
            console.error('Error adding document: ', error);
        });
}

export async function addRecordName(collection, name, obj) {
    const docRef = db.collection(collection).doc(name)
    return docRef.set(obj)
        .then(function (doc) {
            console.log('Document written',docRef);
            return docRef;
        })
        .catch(function (error) {
            console.error('Error adding document: ', error);
        });
}

export async function getRecord(collection, name) {
    return db.collection(collection).doc(name).get()
        .then(function (doc) {
            if (doc.exists) {
                return doc;
            } else {
                throw `File does exist!`;
            }
        })
        .catch(function (error) {
            console.error('Error geting document: ', error);
        });
}

export async function delRecord(collection, name) {
    return db.collection(collection).doc(name).delete()
        .then(function () {
            return true;
        })
        .catch(function (error) {
            console.error('Error removing document: ', error);
        });
}

export async function getRecords(collection, filters){
    console.log(collection, filters);
    const results = [];
    let query = db.collection(collection);
    filters.forEach((filter) => {
        query = query.where(filter.field, filter.condition, filter.value);
    })
    return query.get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
                results.push(doc);
            });
            return results;
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
}