const router = require('express').Router();
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken")
const bcrypt = require("bcrypt");
const User = require("../models/User")

// Update Auth
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 12);
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, 
        { new: true });
        res.status(200).json(updatedUser);
    }
    catch(err) {
        res.status(500).json(err);
    }
})

// Delete
router.delete("/delete/:id", verifyTokenAndAuth, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted.");
    }
    catch(err){
        res.status(500).json(err);
    }
})


// Get user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others} = user._doc;
        res.status(200).json(others);
    }
    catch(err){
        res.status(500).json(err);
    }
})

// Get all users
router.get("/findall", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.limit
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(req.query.limit) : await User.find();
        res.status(200).json(users);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get user stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {

        const data = await User.aggregate([
            {$match: { createdAt: {$gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ])
        res.status(200).json(data);

    } catch(err) {
        res.status(500).json(err);
    }
})



module.exports = router;

