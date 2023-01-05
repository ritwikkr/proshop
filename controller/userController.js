import User from "../model/userSchema.js";

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json("Please fill all details");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(500)
        .json({ msg: "You are not registered. Please Sign Up first" });
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(500).json({ msg: "Email or password incorrect" });
    }
    user.password = undefined;
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

async function signup(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(500).json({ msg: "Please fill all details" });
    }
    const isEmailPresent = await User.findOne({ email });
    if (isEmailPresent) {
      return res
        .status(200)
        .json({ msg: "You are already registered. Please log in" });
    }
    const data = await User.create({ name, email, password });
    const token = data.createJWT();
    data.password = undefined;
    res.status(201).json({ data, token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export { login, signup };
