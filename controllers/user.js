const user1 = require("../models/user");

async function createUser(req,res) {
    try{    const body = req.body;

        if(body == NULL){res.json(<p style={{color:"danger",fontSize:"bold"}}> Fill data correctly </p>)}
        else{   const user = await user1.create({
        name : body.name,
        email:body.email,
        Password:body.Password
    })
    
    res.redirect("home");}}
    catch(err)
    {
        console.log(err);
    }


}



module.exports = {
    createUser
}