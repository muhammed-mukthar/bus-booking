const UserModel = require("../models/user.model");
const { generateAccessToken } =require( "../utils/jwt.utils");


/* ------------------------------- create user ------------------------------ */
 module.exports.createUserHandler=async(req, res) =>{
    try {
      let userexist = await UserModel.findOne({ $or: [ { email:req.body.email}, { phone: req.body.phone } ]})
  
  
      if (userexist) {
        res.json({ err: "user already exist" })
  
      } else {
        const user = await UserModel.create(req.body);
        res.json(user)
      }
    } catch (err) {
      res.status(409).json({ err: err.message });
    }
  
  }

/* ------------------------------- login user ------------------------------- */

module.exports.loginUserHandler=async(req, res)=> {
    let user = await UserModel.findOne({email:req.body.email})//get users details
    if (!user) {
      res.status(200).json({ message: 'user not found' })
    } else {
     let   isValid= await user.comparePassword(req.body.password);
        if (!isValid) return       res.status(200).json({ message: 'Invalid password' })
      let userDetails= {
        _id: user._id,
        email: user.email,
      }
      const accessToken = generateAccessToken(userDetails)

      res.json({ accessToken, ...userDetails })
    }
  }
  
  