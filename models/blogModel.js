var BaseModel = require('./baseModel');

class BlogModel extends BaseModel {

    constructor(db){
        super(db);
    };

    getArticles(callback, options) {
        var collection = this.getCollection('Articles', this.db);
        collection.find(options).then((docs)=>{
            console.log(docs);
            callback(docs);
        });
    }

}

module.exports = BlogModel;