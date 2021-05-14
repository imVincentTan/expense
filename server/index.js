import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';


// app settings
const app = express();

// prefix posts
app.use(bodyParser.json({
    limit: "50mb", 
    extended: true
}));

app.use(bodyParser.urlencoded({
    limit: "50mb", 
    extended: true
}));

app.use(cors());

app.use('/posts', postRoutes)


// db settings
const CONNECTION_URL = 'mongodb+srv://vincent:XhP5lv4jv5Nrezk3@cluster0.msyd6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);