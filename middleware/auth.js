const { getUser} = require("../service/auth");

async function restrictToLoggedInUserOnly(req,res,next)
{
    const userId = req.cookies?.token;
    req.user= null;
// const userId = req.header("authorization");
    if(!userId ) return next();
    const token = userId;
    const user = getUser(token);
    req.user = user;  
    
    return next();
}

function ristrictTo(role = [])
{return function (req,res,next)
    {
        const roleOfuser = req.user;
        if(!roleOfuser){return res.redirect("/login");}
        if(!role.includes(roleOfuser.role))
        {
            return res.end({msg : "Unauthorized User"});
        }
        return next();
    }

}

module.exports = {
    restrictToLoggedInUserOnly,ristrictTo,
} 