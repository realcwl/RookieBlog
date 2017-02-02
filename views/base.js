module.exports = function(response, template){
    this.response = response;
    this.template = template;
}

module.exports.prototype = {

    render: function(data){
        this.response.render(this.template, data);//There should have a data variable but can be added on later.
    }

}