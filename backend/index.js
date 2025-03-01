const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Task1routes = require('./Routes/task1');
const Task1 = require('./Schema/Task1');
const User = require('./Routes/User')
const env = require('dotenv');
env.config();
const corsOption = {
    origin: function(origin, callback) {
        const allowedOrigins = [
            'https://backend-len.vercel.app'
        ];
        
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOption));


app.use(bodyParser.json());
app.use(express.json());
// app.use('/user',user);
app.use('/Task1',Task1routes);
app.use('/user',User)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


app.get('/',(req,res)=>{
    res.send('Hello World');
})


// mongoose.connect('mongodb://localhost:27017/backend',)
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('Connected to MongoDB'))


