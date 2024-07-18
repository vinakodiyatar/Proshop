import express from "express";
const router = express.Router();
// import products from "../data/products.js";
import {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productControlers.js";
import { protect, admin } from "../middlerware/authMiddlerware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.get('/top',getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
router.route("/:id/reviews").post(protect, createProductReview);
export default router;
