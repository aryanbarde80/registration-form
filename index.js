/*Importing installed libraries*/

const express = require("express") 
// Nodejs library by which application making process is simplified
const mongoose = require("mongoose")
// A library by which we can easily interact with our mongodb database
const bodyParser = require("body-parser")
// bodyparser is used to make the date coming from the client side to us from complex to readable
const dotenv = require("dotenv")
// used to hide passwords comming to mongodb

//Making Instance of Express with name app
const app = express ();

//Required to write if we are using dotenv
dotenv.config();

//Value of port on which we want to run our code
const port = process.env.PORT || 3000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

//Code for connecting mongodb
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.i1m3olx.mongodb.net/registrationFormDB`,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
});

// MAking  registration Schema ->> design of data
const registrationSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

// modes of registration schema
const Registration = mongoose.model("Registration" , registrationSchema);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Writing up get request
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html")
})

// Handling post request

app.post("/register" , async(req,res) => {
    try{
        const{name, email, password} = req.body;
        // we are using method of destructuring,date will come in the form of object and then stored in separate variables.
        // req.body will return object and three of the data will be separated.

        const existingUser = await Registration.findOne({email : email});

        //Check for existing user
        if(!existingUser){
            const registrationData = new Registration({
                name,
                email,
                password
            });
            await registrationData.save();
            res.redirect("/success");
        }  
        else{
            console.log("User already exist");
            res.redirect("/error");
        }     
    }
    catch (error){
        console.log(error);
        res.redirect("error");
    }
})


app.get("/success", (req, res)=>{
    res.sendFile(__dirname+ "/pages/success.html");
})
app.get("/error", (req, res)=>{
    res.sendFile(__dirname+"/pages/error.html");
})

// app.listen to run our node js code
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})


