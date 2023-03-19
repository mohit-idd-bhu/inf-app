const readUserData=require('../../helpers/userData');
const writeUserData=require('../../helpers/writeData');

export default async function singup(req, res) {

    if (req.method === "POST") {
      const user = req.body;
      const {name,email,phone,password,dob,city}=user;
      try{
        if(!name||!email||!phone||!password||!dob||!city){
          return res.status(400).json({message:"Enter correct data"});
        }
        const users = await readUserData();
        if(users[email]!=undefined) return res.status(401).json({message:"User Already Exists"});
        users[user.email]=user;
        await writeUserData(users);
        res.status(201).json({ message: "User created successfully!" });
      }catch (error) {
        console.error("Error creating user", error);
        res.status(500).json({ message: "Error creating user" });
      }
    }
    else{
      res.status(405).json({ message: "Method not allowed" });
    }
  }