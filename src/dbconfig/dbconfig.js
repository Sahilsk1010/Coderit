import mongoose from  "mongoose";


export async function connect(){
    try{
        // console.log(process.env.MONGO_URI)
        await mongoose.connect("mongodb+srv://mprateekvernekar189:sOmwyTjrPEbY3Dw1@cluster0.tbmznaa.mongodb.net/?retryWrites=true&w=majority")
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log("MongoDB connected beautifully");
        })
        connection.on('error',(err)=>{
            console.log('MongoDb connection encountered error');
            process.exit();
        })
    }
    catch(err){
        console.log("Something has gone wrong");
        console.log(err);
    }
}
