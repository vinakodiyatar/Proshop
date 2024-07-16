import express from 'express';
const router=express.Router();
// import products from "../data/products.js";
import { createProduct, getProductById,getProducts,updateProduct } from '../controllers/productControlers.js';
import {protect,admin} from '../middlerware/authMiddlerware.js'


router.route('/').get(getProducts).post(protect,admin,createProduct);
router.route('/:id').get(getProductById).put(protect,admin,updateProduct);


export default router;