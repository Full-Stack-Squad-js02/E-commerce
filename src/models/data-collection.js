'use strict';

class DataCollection {

    constructor(model) {
        this.model = model;
    }
    get(id) {
        return this.model.findOne({ where: { id: id } });
    }

    getAll(id) {
        return this.model.findAll({ where: { user_id: id } });
    }

    create(record) {
        return this.model.create(record);
    }

    update(id, data,id2) {
        return this.model.findOne({where: {user_id:id2,id:id}})
            .then(record =>{console.log(record)
                 record.update(data)});
    }

    delete(id, id2) {
        return this.model.destroy({
            where: {
                id: id,
                user_id: id2
            }
        });
    }
}

module.exports = DataCollection;