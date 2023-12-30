import { Users } from "../models/user.js";
import generateToken from '../utils/GenerateToken.js'

//login User
const loginUser = async (req, res) => {
    //grab the Information
    const { username, password } = req.body;
    const user = await Users.findOne({ username });
  
    if (!username || !password) {
      return res.json({
        error: "Fill All Field",
      });
    } else {
      //Verify if the user Exist
      if (!user) {
        return res.json({
          error: "User doesnt Exist",
        });
      } else {
  
        if (password !== user.password) {
          return res.json({ error: "Username or Password is Incorrect" });
        } else {
          generateToken(res, user._id);
          res.status(201).json({
            id: user._id,
            username: user.username,
          });
        } 
      }
    }
  };

  const registerUser = async (req, res) => {
    //grab the Information
    const { username, password } = req.body;
    const user = await Users.findOne({ username });
  
    if (!username || !password) {
      return res.json({
        error: "Fill All Field",
      });
    } else {
      //Verify if the user Exist
      if (user) {
        return res.json({
          error: "User Exist",
        });
      } else {
        
        const newUser = Users({
          username, password
        }) 

        await newUser.save()

          generateToken(res, newUser._id);
          res.status(201).json({
            id: newUser._id,
            username: newUser.username,
          });
         
      }
    }
  };


  export {
    loginUser,
    registerUser
  }