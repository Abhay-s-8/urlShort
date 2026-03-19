const {v4: uuidv4} = require('uuid');
const user1 = require("../models/user");
const {setUser,getUser} = require("../service/auth")
async function createUser(req,res) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send("<p>Fill data correctly</p>");
        }

        await user1.create({
            name,
            email,
            password
        });
        

        res.render("home");  
    }
    catch(err) {
        console.log(err);
        res.status(500).send("Server error");
    }
}


async function userLogin(req, res) {
    try {
        const email = req.body.email.trim();
        const password = req.body.password.trim();

        const member = await user1.findOne({ email });
console.log(member.password);
console.log(password);
        console.log("Entered:", email, password);
        console.log("DB user:", member);
        const sessionId = uuidv4();
        setUser(sessionId,member);
        res.cookie("uid",sessionId);
        if (!member) {
            return res.render("login", {
                error: "User not found"
            });
        }

        if (member.password !== password) {
            return res.render("login", {
                error: "Wrong password"
            });
        }

        return res.redirect("/");

    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
}
module.exports = { createUser,userLogin };