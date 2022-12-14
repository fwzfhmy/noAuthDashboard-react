import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
// REGISTER USER

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
      city: "Shah Alam",
      state: "Selangor",
      country: "Malaysia",
      occupation: "student",
      phoneNumber: "0194164012",
      transactions: [],
      role: "admin",
    });
    
    newUser.save((err, newUser) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }});
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
