
const mangoose = require("mongoose");
const { array, object } = require("joi");
const SubModule = new mangoose.Schema({
    moduleId: {
        type:Object,
        required:true,
    },
     name:{
                type:String,
                required:true,
    },
    role: {
        type: Array,
        
    },
            status:{
                type:Boolean,
                default:true
            },
            CreatedAt:{
                type:Date,
                default:Date.now
            }

});
module.exports = mangoose.model("subModule",SubModule );