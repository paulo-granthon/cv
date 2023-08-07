import express from'express';
import { Request, Response } from 'express';
import { config as dotenvConfig } from 'dotenv';
// import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

dotenvConfig();

const port = process.env.PORT || 4000;

// app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Hello from server!" });
});

const visitorSchema = new mongoose.Schema({
    name: String,
    count: Number
})

// Creating Visitor Table in visitCounterDB
const Visitor = mongoose.model("Visitor",visitorSchema)
  
// Get request to app root
app.get('/visitor', async function(req,res){
      
    // Store the records from the Visitor table
    const visitors = await Visitor.findOne({name: 'localhost'})
  
    // If the app is being visited first
    // time, so no records
    if(visitors == null) {
          
        // Creating a new default record
        const beginCount = new Visitor({
            name : 'localhost',
            count : 1
        })
  
        // Saving in the database
        beginCount.save()
  
        // Sending the count of visitor to the browser
        res.send(`<h2>Counter: `+1+'</h2>')
  
        // Logging when the app is visited first time
        console.log("First visitor arrived")
    } else{
        // Incrementing the count of visitor by 1
        visitors.count = 1 + ( visitors.count || 1 );
  
        // Saving to the database
        visitors.save()
  
        // Sending the count of visitor to the browser
        res.send(`<h2>Counter: `+visitors.count+'</h2>')
  
        // Logging the visitor count in the console
        console.log("visitor arrived: ",visitors.count)
    }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
