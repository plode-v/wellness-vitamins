const router = require('express').Router();
const User = require("../models/User")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 12),
    })

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }
    catch(err) {
        res.status(500).json(err);
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(404).json({ message: "Incorrect username or password" });
        }
        const validate = await bcrypt.compare(req.body.password, user.password);
        if (!validate) {
            return res.status(404).json({ message: "Incorrect username or password" });
        }

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
        process.env.JWT_SECRET,
        {expiresIn: "3d"}
        );

        const { password, ...others} = user._doc;
        return res.status(200).json({...others, accessToken});
    }
    catch(err) {
        res.status(500).json(err);
    }
})




module.exports = router;