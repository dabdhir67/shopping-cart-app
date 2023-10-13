//create routes / api's for user singin-up
let express = require("express");
let userRoute = express.Router();
const userDataModel = require("../data-model/userDataModel");


//localhost:9000/user/api/signinup
userRoute.post("/api/signin", (req, res)=>{
    userDataModel.findOne({
        $and: [
        { userName: req.body.userName },
        { passWord: req.body.passWord }
        ]
    }).then((existingUser) =>{
            console.log("Sign in is successfull ", existingUser);
            res.status(200).send(existingUser)
        })
        .catch((err) => {
            console.log("Error", err)
            res.send("Error trying to login")
        })
    })

userRoute.post("/api/signup", (req, res)=>{
    console.log("new user data ", req.body)
    let user = req.body
    let newUser = new userDataModel(user)
    newUser.save()
    .then((savedUser) => {
        // console.log("Successfully signed up: ", newUser)
        res.send(savedUser)
    })
    .catch((err) => {
        console.log("Error: ", err)
        res.send("Error in Saving User to DB")
    })    
})
    

userRoute.get("/api/getuser",(req, res)=>{
    userDataModel.find()
    .then((allusers)=>{
        res.send(allusers)
    })
    .catch(()=>{
        res.send("error while fetching users")
    })
})

module.exports = userRoute;