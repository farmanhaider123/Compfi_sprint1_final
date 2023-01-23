
const mangoose = require("mongoose");
const { array } = require("joi");
const Module= new mangoose.Schema({
     name:{
                type:String,
                required:true,
    },
    role: {
        type: Array,
        
    },
            submodule:{
                type:Object
            },
            status:{
                type: Boolean,
                default:true
            },
            CreatedAt:{
                type:Date,
                default:Date.now
            }

});
module.exports = mangoose.model("module",Module );