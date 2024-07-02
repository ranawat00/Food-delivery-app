import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('{ mongodb+srv://gauravranawat7900:<password>@cluster0.f3w0myx.mongodb.net/}/food-del').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.