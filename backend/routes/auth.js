const router =  require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");



//SIGN IN

router.post("/signin", async (req, res) => {
    try {
         const user = await User.findOne({ email: req.body.email });
         if (!user) {
            res.status(400).json({ message: "Please Sign Up First" });
         }

         const isPasswordCorrect = bcrypt.compareSync(
            res.body.password,
            user.password
         );
         if(!isPasswordCorrect) {
            res.status(400).json({ message: "Password Is Not Correct" });
         }
         const { password, ...others } = user._doc;
         res.status(200).json({others });
    } catch (error) {
              res.status(400).json({ message: "user Already Exists" });
        
    }
});  

module.exports = router;