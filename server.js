import express from 'express';
import { APP_PORT, DB_NAME, DB_PASSWORD,DB_USERNAME } from './config';
import path from 'path';
const app = express();

import routes from './routes/index.js'
import mongoose from "mongoose";
const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.47apsm5.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('DB connected...');
});

global.appRoot = path.resolve(__dirname);
app.use(express.urlencoded({ extended: false}));


app.use('/api',routes);

app.listen(APP_PORT,()=>{
    console.log(`Listening on port ${APP_PORT}`);
});