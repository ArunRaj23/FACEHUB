const jwt=require("jsonwebtoken")
const secretkey=process.env.secretkey;

function tokenMiddleware(req,res,next){
    const token=req.headers.authorization;
    if(!token) {
        return res.status(402).json({ message: 'bad request' });
    }

    try {
        jwt.verify(token, secretkey, (err, decoded) => {
          if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
          }
    
          req.user = decoded;
          next();
        });
      } catch (error) {
        res.status(500).json({ message: 'Internal server error'});
      }
    }

module.exports = tokenMiddleware;