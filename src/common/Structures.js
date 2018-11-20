import { getRecord, addRecord, delRecord } from './ModifyRecord.js';

export async function loadRecord(collection, refid) {
    const data = await getRecord(collection, refid);
    const record = new newrecord('edit', collection, data.data());

    return record;
}

class newrecord {
    constructor(type = 'create', collection, data) {
        this.data = data;
        this.collection = collection;
        this.type = type;
        //this.schema = schema;
    }

    setFieldValue(field_id, value) {
        this.data[field_id] = value;
    }

    getFieldValue(field_id) {
        return this.data[field_id];
    }

    delete() {
        if (this.type == 'edit')
            delRecord(collection, refid);
        else
            throw `You can't delete this record, because doesn't exist yet`;
    }

    create() {
        if (this.type == 'create')
            addRecord(collection, this.data);
        else
            throw `You can't create this record, because already exists`;
    }
}

