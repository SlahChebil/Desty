import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
// App Routes
app.use('/posts',postRoutes);

//COnnection URL
const URL='mongodb+srv://Gzome:WERmz42hLqYZaA3@cluster0.cf0fy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT= process.env.PORT || 5000;
mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT,()=>{console.log(`Srever running on port: ${PORT}`);console.log('Hello world')}))
    .catch((err)=> console.log(err));

