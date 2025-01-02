const adminAuth=(req, res, next)=>{
    const token ="xyz";
    const isAdminAuthorized= token =="xyz";
    if(!isAdminAuthorized){
        console.log("not an admin")
        res.status(401).send("Unauthorized");
    }
    else{
        next();
    }
}
const userAuth=(req, res, next)=>{
    const token ="xyz";
    const isAdminAuthorized= token =="xyz";
    if(!isAdminAuthorized){
        console.log("not an admin")
        res.status(401).send("Unauthorized");
    }
    else{
        next();
    }
}
module.exports = {
    adminAuth,
    userAuth,
 
};