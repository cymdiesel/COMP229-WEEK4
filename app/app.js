// Third-Party Modules
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';

// ES Modules for __dirname fix
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Import Mongoose Module
import mongoose from 'mongoose';

// Import Configuration Module 
import { MongoURI, Secret } from '../config/config.js';

// Import Routes
import indexRouter from './routes/index.route.server.js';
import movieRouter from './routes/movies.route.server.js';

// Instantiate Express Application
const app = express();

// Complete the DB Configuration 
mongoose.connect(MongoURI);
const db = mongoose.connection;

// Listen for connection success or error
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo Connection Error"));

// Set up Middlewares

    // Setup ViewEngine EJS
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname,'/client')));
app.use(express.static(path.join(__dirname,'../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

// Use Routes
app.use('/', indexRouter);
app.use('/', movieRouter);

export default app;

