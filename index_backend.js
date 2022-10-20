const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())


mongoose.connect('mongodb://localhost:27017/myhotel');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', function() {
    console.log("Connection Successful!");
});
// define Schema
var CustSchema = mongoose.Schema({
    name: String,
    email : String,
    phone : String,
    password : String,
  });

  // compile schema to model
  var customer = mongoose.model('customers', CustSchema);





app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get("/customers",(req,res , next)=>{
    res.json({"users":["userone","usertwo","userthree"]})
})


app.post("/customers" , (req , res ,next)=>{
    console.log(req.body)
   

})

app.post("/createcustomer",(req,res,next)=>{

    //const article = new cust(req.body)
    console.log(req.body);
    var cus = new customer(req.body);
    cus.save(function (err, customer) {
        if (err) return console.error(err);
        console.log(customer.name + " added to customers.");
      });

})

app.listen(3001,()=>{
    console.log("server started on port 3001")
})
