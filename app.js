const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.Port || 4000;
const avatar_router = require('./routes/Avatar.Route');

// Allow all origins (for development)
app.use(cors());

// Test route
app.get("/api/test", (req, res) => {
    res.json({ message: "CORS is working!" });
});


// Middleware to parse JSON
app.use(express.json());
// for Vote Routes
app.use('/api/v1',avatar_router);


app.listen(port,() =>{
    console.log(`listening on ${port}`);
})