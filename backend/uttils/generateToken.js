import jwt from 'jsonwebtoken';

//@desc Auth user & get token

const generateToken=(res,userId)=>{
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
  
      //Set JWT as HTTP-Only cookie
      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 100, //30days
      });
}

export default generateToken;