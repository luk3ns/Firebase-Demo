import { addRecordName } from '../../common/ModifyRecord.js';
import template from './template.html';

export default (parentid) => {
    const element = document.createElement('div');
    element.innerHTML = template;
    document.getElementById(parentid).appendChild(element);
    document.getElementById('initadd').addEventListener('click', clickToAdd);
   
}

async function clickToAdd() {
    const collection = document.getElementById('collection').value;
    const name = document.getElementById('name').value;
    const obj = customer;
    console.log(collection,name,obj);
    addRecordName(collection, name, obj);
}

const customer = {
    name: "test"
}