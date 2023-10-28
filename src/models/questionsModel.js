import mongoose from  "mongoose";

const questionSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Required"],
    },
    usn:{
        type:String,
        required:[true,"USN is required"]
    }
})


const Question=mongoose.models.Question || mongoose.model("Question",questionSchema);

export default Question;
