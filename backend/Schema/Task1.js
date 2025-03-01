const mongoose = require('mongoose');

const Task1Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    descrption:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

// const Task1Schema= mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//      email: {
//         type: String,
//         required: true
//     },
//     Rollno:{
//         type:Number,
//         required:true
//     },
// });

module.exports = mongoose.model('Task1', Task1Schema);