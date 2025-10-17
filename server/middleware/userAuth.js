import jwt from "jsonwebtoken";

const userAuth = async (req, res, next)=> {
    const {token} = req.cookies;
    console.log("inside middleware: 1")
    if(!token){
        return res.json({
            success: false, 
            message: 'Not Authorized Login Again'
        });
    }
    console.log("inside middleware: 2")

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        console.log("inside middleware: 3")

        // If the decoded token includes a valid user ID (id), it attaches it to the req.body object.
        // Otherwise, it denies access.
        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
            console.log("inside middleware: 4")
        }
        else{
            console.log("inside middleware: 5")
            return res.json({success: false, message: 'Not Authorized Login Again'});
        }
        console.log("inside middleware: 6")
        next(); // It will call our controller function

    } catch (error) {
        console.log("inside middleware: 7")
        return res.json({success: false, message: error.message});
    }
}

export default userAuth;