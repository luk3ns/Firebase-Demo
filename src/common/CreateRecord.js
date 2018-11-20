import {valideField} from './ValideField.js'
import {item} from './Schema.js'

export function createNewRecord(list, structure) {
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

    console.log(obj,itemsArray);
    //return obj;
    // addRecord(obj, 'transactions').then(refid => {
    //     console.log(refid);
    //     itemsArray.forEach(item => {
    //         addRecord({'refid': refid, ...item},'items');
    //     })
    // });


}