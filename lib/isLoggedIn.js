
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    var token = ""
    var authToken = req.header("Authorization"); 
    console.log(authToken)

    if(authToken){
        authToken = authToken.replace("Bearer ", ""),
        console.log(authToken)
        token = authToken;
    } else {   //  !authToken
        return res.json({"message": "You are not allowed to view this as this is hidden behind the wall of Authorization"});
    }

    try{           // Now we have a token, let's check if it is valid or not. if it is, let req.user equal user._id which is in payload

        const decoded = jwt.verify(token, "SUPERSECRET"); 

        req.user = decoded.user; 
        next();


    } catch(error){
        return res.status(401).json({"message": "Your token is invalid"})
    }
}