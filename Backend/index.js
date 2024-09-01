const express=require("express");
const mongoose=require("mongoose");
const dotenv= require("dotenv");
const morgan= require("morgan");
const helmet= require("helmet");
const userRoute=require("./routes/users")
const authRoute=require("./routes/auth")
const postRoute=require("./routes/posts")
const cors = require('cors');


dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("mongo done")
});
const app=express();

app.use(cors());
// app.use(cors({
//     exposedHeaders: ['authorization']
// }));
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/posts',postRoute)



app.listen(8800,()=>{
    console.log("backend running")
})