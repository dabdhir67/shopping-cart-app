let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack16"); //creates db with name mernstack5 or opens a connection if already present

let RecentOrderSchema = new schemaObj({
    userid: {type:String, required:true},
    order: Object,
    dateTime: {type:Date, default: Date.now} 
})

let RecentOrderModel = mongooseObj.model("recentOrder", RecentOrderSchema);

module.exports = RecentOrderModel;