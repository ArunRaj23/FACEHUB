const router=require("express").Router();
const Post = require("../DB_models/Post");
const User=require("../DB_models/Users");
const tokenMiddleware = require("../Middleware/tokenMiddleware")

// //token verification
// router.use(tokenMiddleware);


//create a post
router.post('/newpost',async(req,res)=>{
    const { content, fileUrl, userId, desc } = req.body;
    const newPost=new Post({
        content:content,
        img:fileUrl,
        userId:userId,
        desc:desc,
    })
    try{
        const savedpost=await newPost.save();
        res.status(200).json(savedpost);
    }catch(err){
        res.status(500).json({message:"error"});
    }
})

//update a post
router.put('/:postId',async(req,res)=>{
    try{
    const post =await Post.findById(req.params.postId);
    if(post.userId===req.body.userId){
        await post.updateOne({$set:req.body});
        return res.status(200).json({message:"Post updated successfully"})
    }
    else{
        return res.status(403).json({message:"You can only edit your own posts"});
    }
    }catch(err){
        res.status(500).json({message:"Error 500"})
    }
})


//delete a post
router.delete('/:postId',async(req,res)=>{
    try{
    const post =await Post.findById(req.params.postId);
    if(post.userId===req.body.userId){
        await post.deleteOne();
        return res.status(200).json({message:"Post deleted successfully"})
    }
    else{
        return res.status(403).json({message:"You can only delete your own posts"});
    }
    }catch(err){
        res.status(500).json({message:"Error 500"})
    }
})

//like and dislike a post
router.put('/:postId/like',async(req,res)=>{
    try{
    const post =await Post.findById(req.params.postId);
    if(!post.likes.includes(req.body.userId)){
        await post.updateOne({$push:{likes:req.body.userId}});
        res.status(200).json({message:"liked the post"});
    }
    else{
        await post.updateOne({$pull:{likes:req.body.userId}});
        return res.status(200).json({message:"You have disliked the post"});
    }
    } catch(err){
        res.status(500).json({message:"Error 500"})
    }
})

//get a post
router.get('/:postId',async (req,res)=>{
    try{
        const post=await Post.findById(req.params.postId);
        res.status(200).json(post);
    } catch(err){
        res.status(500).json({message:"Error"})
    }
})

//get timeline posts

router.get('/timeline/:userId',async (req,res)=>{
    try{
        const currentuser=await User.findById(req.params.userId); 
        const ownPosts=await Post.find({userId: currentuser._id});
        const followingPosts= await Promise.all(
            currentuser.followings.map((friendId)=>{
                return Post.find({userId:friendId});
            } )
        );
        const followerPosts=await Promise.all(
            currentuser.followers.map((friendId)=>{
                return Post.find({userId:friendId});
            } )
        );
        const allPosts = [...ownPosts, ...followingPosts.flat(), ...followerPosts.flat()];
        const uniquePosts = Array.from(
        new Map(allPosts.map(post => [post._id.toString(), post])).values()
        );
        res.status(200).json(uniquePosts);
    } catch(err){
        res.status(500).json({message:"Error"})
    }
})

//get a user's all posts

router.get('/profile/:username',async (req,res)=>{
    try{
        const currentuser=await User.findOne({username: req.params.username}); 
        const ownPosts=await Post.find({userId: currentuser._id}); 
        res.status(200).json(ownPosts);
    } catch(err){
        res.status(500).json({message:"Error"})
    }
})



module.exports = router;