//import uploadCSV from './components/uploadCSV/index.js';
import createObject from './components/createObject/index.js';
import {loadRecord} from './common/Structures.js';
import {addRecordName, getRecord} from './common/ModifyRecord';
import {valideField} from './common/valideField';
//createObject('section-upload');

//const nowyCustomer = new customer({name:'test2',type:'hmm'});
//nowyCustomer.setFieldValue('nowepole2','zmiana');
//console.log(nowyCustomer);

/*
getRecord('customers','2')
.then(doc =>{
    addRecordName('customers','3',{name:'asd',parent:doc.ref});
})


const newrecord = loadRecord('customers','1');
newrecord.then(newrecord => {
    console.log(newrecord);
    newrecord.getFieldValue('parent').get()
    .then(function (doc) {
        console.log(doc);
        if (doc.exists) {
            console.log(doc.data());
            return doc.data();
        } else {
            throw `File does exist!`;
        }
    })
})
*/


valideField("",
    {
        id: 'name',
        type: 'text',
        //source: 'customer',
        name: 'Name',
        required: true,
        uniq: true,
        editable: false,
        order: 1
    },'customer'
).then(result => {console.log(result);} );




