const jwt=require('jsonwebtoken');
const readUserData=require('../../helpers/userData');

export default async function verify(req,res){
    if(req.method==='GET'){
        const token=req.body.token;
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        try{
            const decoded = jwt.verify(token,'secret-key');
            const email=decoded.email;
            const users=await readUserData();
            const user=users[email];
            res.status(200).json({user});
        }catch (err){
            res.status(401).send("Invalid Token");
        }
    }
    else{
        res.status(401).json({message:"Method Not Found"});
    }
}