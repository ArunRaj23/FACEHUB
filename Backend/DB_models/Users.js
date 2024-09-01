const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:4,
        max:12,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        min:6,
        required:true
    },
    profilepic:{
        type:String,
        default:""
    },
    coverpic:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    },
    hometown:{
        type:String,
        max:20
    },
    city:{
        type:String,
        max:20
    },
    bio:{
        type:String,
        max:50
    }
},
{timestamps:true}
)

module.exports= mongoose.model("User",userschema);
