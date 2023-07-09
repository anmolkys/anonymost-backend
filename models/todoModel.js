const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    text: {
        type:String,
        required:true
    },
    time: {
        type:String,
        required:false
    }
})

module.exports=mongoose.model('todo',todoSchema);