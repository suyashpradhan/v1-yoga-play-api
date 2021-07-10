const express = require("express");
const { User } = require("../models/users.model");

const createNewUser = async (req, res) => {
  const { fullName, email, password, userName } = req.body;

  try {
    const savedUser = await User.create({
      fullName,
      email,
      password,
      userName
    });
    res.status(200).json({
      success: true,
      message: "Succesfully signed up.",
      _id: savedUser._id,
    });
  } catch (error) {
    res.status(401).json({ success: false, message: "Something Went Wrong" });
  }
};

module.exports = { createNewUser };
