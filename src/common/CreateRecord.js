import {valideField} from './ValideField.js'
//import {item} from './Schema.js'

export async function createNewRecord(list, structure) {
    return new Promise(function (resolve) {
    const obj = {};
    const itemsArray = [];
    list.forEach(row => {
        structure.fields.forEach(field => {
            valideField(row[field.name_map], field);
            if (obj[field.name] !== row[field.name_map])
                obj[field.name] = row[field.name_map];
        })
        const itemObj = {};
        structure.items.forEach(item => {
            valideField(row[item.name_map], item);
            itemObj[item.name] = row[item.name_map];
        });
        itemsArray.push(itemObj);
    });
    obj.items = itemsArray;
    //console.log(obj);
    return obj;
    //addRecord(obj, 'transactions').then(refid => {
    //    return refid;
    //});

    })
}
