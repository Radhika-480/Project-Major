// const express = require("express")
// const User = require("../models/user-model")

// const signup = async (req, res) => {
// try {
//     const {userName,email,password}= req.body
//     const userExist = await User.findOne({ email });
//     if (userExist) {
//       return res.status(400).json({ msg: "Email already exists" });
//     }

//     // Hash the password
    

//     // Create new user
//     const newUser = new User({
//       userName,
//       email,
//       password
//     });

//     await newUser.save();

//     res.status(201).json({ msg: "User registered successfully" });
    
// } catch (error) {
//     console.error(error,"this is controoler error")
// }
// }


// module.exports = signup

const express = require("express");
const User = require("../models/user-model");

const signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "Email already exists", });
    }

    // TODO: Add password hashing here later

    const newUser = new User({
      userName,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({  msg: "User registered successfully",
      user: newUser });

  } catch (error) {
    console.error("❌ Error in signup controller:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Password match (abhi hashing nahi lagaya, so direct compare)
    if (user.password !== password) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Success
    const userToSend = user.toObject();
    delete userToSend.password;

    res.status(200).json({
      msg: "Login successful",
      user: userToSend
    });

  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};


module.exports = {signup,login};
