'use strict';

class DataCollection {

    constructor(model) {
        this.model = model;
    }
    get(id) {
        if (id) {
            return this.model.findOne({where:{id:id}});
        } else {
            return this.model.findAll({});
        }
    }

    create(record) {
        return this.model.create(record);
    }

    update(id, data,id2) {
        return this.model.findOne({where: {user_id:id2,id:id}})
            .then(record =>{console.log(record)
                 record.update(data)});
    }

    delete(id) {
        return this.model.destroy({where: { id : id  } });
    }
}

module.exports = DataCollection;