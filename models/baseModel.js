class BaseModel{

    constructor(db){
        this.db = db;
    }

    setDB(db){
        this.db = db;
    }

    getCollection(name, db){
        var database = db || this.db;
        return database.get(name);
    }
}

module.exports = BaseModel;