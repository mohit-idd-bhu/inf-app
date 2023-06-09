const readUserData=require('../../helpers/userData');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const secret_key=process.env.SECRET_KEY;

export default async function sigin(req, res) {
    if(req.method==='POST'){
      const {email,password}=req.body;
      const users=await readUserData();
      const user = users[email];
      if(!user){
        return res.status(401).json({message:'User Not Found'});
      }
      const isMatch= (password===user.password);
      if(!isMatch) res.status(401).json({ message: 'Invalid email or password' });
      const token=jwt.sign({email},secret_key);
      res.status(200).json({token});
    }
    else{
      res.status(405).json({ message: "Method not allowed" });
    }
}