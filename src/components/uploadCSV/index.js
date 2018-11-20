
import { addRecord, delRecord, getRecord, getRecords } from '../../common/ModifyRecord.js';
import { uploadFile } from '../../common/ModifyFile.js';
import { createNewRecord } from '../../common/CreateRecord.js';
import template from './template.html';

const structure = {
    fields: [{
        'name': 'type',
        'type': 'string',
        'required': true,
        'name_map':'type2'
    }, {
        'name': 'document number',
        'type': 'int',
        'required': true,
        'key': true,
        'name_map':'documentnumber'
    }, {
        'name': 'customer',
        'type': 'string',
        'required': false,
        'name_map':'customer'
    }],
    items: [
        {
            'name': 'item',
            'type': 'number',
            'required': true,
            'name_map':'item2'
        }, {
            'name': 'quantity',
            'type': 'int',
            'required': true,
            'name_map':'qty'
        }
    ]
}



export default (parentid) => {
    const element = document.createElement('div');
    element.innerHTML = template;
    document.getElementById(parentid).appendChild(element);
    document.getElementById('initupload').addEventListener('click', clickUpload);
    getRecords('transactions', [{ field: 'document number', condition: '==', value: '2' }]);
}

async function clickUpload() {
    const file = document.getElementById('csvfile').files[0];
    const path = 'csv';
    const fileurl = await uploadFile(file, path);
    getCSV(fileurl);
}


function getCSV(url) {
    fetch(url)
        .then((response) => {
            csvToObj(response.text());
        })
        .catch(console.error);
}

function csvToObj(csv, separator = ',') {
    csv.then((csv) => {
        const csvArray = csv.split('\n');
        const jsonObj = [];
        const headers = csvArray[0].split(separator);
        for (let i = 1; i < csvArray.length; i++) {
            const row = csvArray[i].split(separator);
            const obj = {};
            for (let j = 0; j < row.length; j++) {
                if (headers.length != row.length) throw `Different number of columns than in the header row. First found on line ${i}`;
                obj[headers[j].trim()] = row[j].trim();
            }
            jsonObj.push(obj);
        }
        console.log(jsonObj);
        groupByKey(jsonObj, structure);
        return jsonObj;
    }).catch(console.error);
}


function groupByKey(jsonObj, structure) {
    const keyFields = structure.fields.filter(isKey);
    console.log(keyFields);
    const values = [];
    const result = [];
    for (let i = 0; i < jsonObj.length; i++) {
        let val = jsonObj[i][keyFields[0].name_map];
        let index = values.indexOf(val);
        if (index > -1) {
            result[index].push(jsonObj[i]);
        } else {
            values.push(val);
            result.push([jsonObj[i]]);
        }
    }
    console.log(result);
    result.forEach(item => {
        createNewRecord(item,structure);
    })
    return result;
}

function isKey(field) {
    return field.key;
}
