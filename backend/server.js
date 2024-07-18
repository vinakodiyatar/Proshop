import path from  'path'
import dotenv from 'dotenv';
import express from "express";
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import { errorHandler,notFound } from './middlerware/errorMiddlerware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
const port = process.env.PORT || 5000;

connectDB()//connect to MongoDB


const app = express();

//Body parser middlerware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/upload',uploadRoutes);

const __dirname=path.resolve();
app.use('/uploads',express.static(path.join(__dirname,'/uploads')));

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`server is running on port ${port}`));
