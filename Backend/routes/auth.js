const router=require("express").Router();
const User=require("../DB_models/Users");
const bcrypt=require("bcrypt");
// const jwt=require("jsonwebtoken");

router.post('/signup',async (req,res)=>{
    try{
        const salt= await bcrypt.genSalt(10);
        const hashedPass=await bcrypt.hash(req.body.password, salt);
        await User.create({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass
        })
        res.status(200).json({
            message:"user done"
        })
    }
    catch(err){
        res.status(500).json({
            message:"invalid input"
        })
    }
})

router.post('/signin', async (req,res)=>{
    try{
        const user= await User.findOne({email:req.body.email});
        if(!user){
            res.status(400).json({message:"user not found"})
            return
        }
        const validpassword=await bcrypt.compare(req.body.password, user.password);
        if(!validpassword){
            res.status(400).json({message:"wrong password"})
            return
        }
        // const token=jwt.sign(req.body.email, process.env.secretkey);
        res.status(200).json(user)
    }catch(err){
        console.log("error in auth backend")
        res.status(500).json({message:"try again"})
    }
})


module.exports = router;