var BaseModel = require('./baseModel');
var showdown = require('showdown');
var converter = new showdown.Converter();

class BlogModel extends BaseModel {

    constructor(db){
        super(db);
    };

    getArticles(callback, query, options) {
        var collection = this.getCollection('Articles', this.db);
        collection.find(query).then((docs)=>{
            console.log(docs);
            if(options && 'MD_parse' in options && options['MD_parse']) {
                for(var num in docs) {
                    docs[num].content = converter.makeHtml(docs[num].content);
                }
            }
            callback(docs);
        });
    }

}

module.exports = BlogModel;