const { getUser} = require("../service/auth");

async function restrictToLoggedInUserOnly(req,res,next)
{
    // const userId = req.cookies.uid;
const userId = req.header("authorization");
    if(!userId) return res.redirect("/login");
    const token = userId.split("Bearer ")[1];
    if(!token) return res.redirect("/login");
    const user = getUser(token);
    if(!user) return res.redirect("/login");
    req.user = user;  
    next();
}

async function checkAuth(req,res, next) {
    // const userUid = req.cookies?.uid;
        const userUid = req.header("authorization");
        if(!userUid) {
            req.user = null;
            return next();
        }
        const token = userUid.split("Bearer ")[1];
        if(!token) {
            req.user = null;
            return next();
        }
    const user = getUser(token);
    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedInUserOnly,checkAuth,
} 