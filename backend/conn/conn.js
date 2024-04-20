const mongoose = require("mongoose");

const conn = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://<username>:<password>@cluster0.dx2zhta.mongodb.net/").then(() => {
        console.log("Connected");
    });
        
    } catch (error) {
        res.status(400).json({
            message: "Not connected",
        });
        
    }
};
conn();