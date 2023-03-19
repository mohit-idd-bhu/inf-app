const readUserData=require('../../helpers/userData');
const writeUserData=require('../../helpers/writeData');

export default async function singup(req, res) {

    if (req.method === "POST") {
      const user = req.body;
      try{
        const users = await readUserData();
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