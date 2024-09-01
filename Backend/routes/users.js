const router=require("express").Router();
const bcrypt=require("bcrypt");
const User = require("../DB_models/Users");
const tokenMiddleware = require("../Middleware/tokenMiddleware")

// //token verification
// router.use(tokenMiddleware);

//update user
router.put('/:id',async (req,res)=>{
    if(req.body.userId=== req.params.id || req.body.isAdmin){
        if(req.body.password){
           try{
            const salt= await bcrypt.genSalt(10);
            req.body.password= await bcrypt.hash(req.body.password, salt);
           }catch(err){
            return res.status(500).json({message:"Error"})
           } 
        }
        try{
            const user=await User.findByIdAndUpdate(req.params.id,{
                $set: req.body
            });
            res.status(200).json({message:"Account has been updated"})
        }catch(err){
            return res.status(500).json({message:"Error"})
        }
    }
    else{
        return res.status(403).json({message:"You can update only your account"})
    }
})

//delete user
router.delete('/:id',async (req,res)=>{
    if(req.body.userId=== req.params.id || req.body.isAdmin){
        try{
            const user=await User.findByIdAndDelete(req.params.id);
            res.status(200).json({message:"Account has been deleted"})
        }catch(err){
            return res.status(500).json({message:"Error"})
        }
    }
    else{
        return res.status(403).json({message:"You can delete only your account"})
    }
})

//get user
router.get('/',async(req,res)=>{
    const userId=req.query.userId;
    const username=req.query.username;

    try{
        const user= userId? await User.findById(userId):
                            await User.findOne({username : username});
        const {password,updatedAt,...other}=user._doc
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err);
    }
})

//follow a user
router.put('/:id/follow', async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user=await User.findById(req.params.id);
            const currentuser= await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}});
                await currentuser.updateOne({$push:{followings:req.params.id}});
                res.status(200).json({message:"user followed successfully"})
            }
            else{
                res.status(403).json({message:"you already follow this user"})
            }

        }catch(err){
            res.status(500).json({message:"error"});
        }
    }
    else{
        res.status(403).json({message:"You can't follow yourself"})
    }
})

//unfollow a user
router.put('/:id/unfollow',async (req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user=await User.findById(req.params.id);
            const currentuser= await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}});
                await currentuser.updateOne({$pull:{followings:req.params.id}});
                res.status(200).json({message:"user unfollowed successfully"})
            }
            else{
                res.status(403).json({message:"you don't follow this user"})
            }

        }catch(err){
            res.status(500).json({message:"error"});
        }
    }
    else{
        res.status(403).json({message:"You can't unfollow yourself"})
    }
})


module.exports = router;