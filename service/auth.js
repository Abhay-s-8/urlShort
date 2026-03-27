const jwt = require("jsonwebtoken");
const sec = "abhay5451212"



function setUser(user){
   return jwt.sign({
    _id : user._id,
    email : user.email,
    role:user.role,
   },sec,{expiresIn : "1h"});
}

function getUser(token)
{try {
    return jwt.verify(token,sec)
} catch (error) {
    return null;
}
    
}

module.exports ={
    setUser,getUser
}