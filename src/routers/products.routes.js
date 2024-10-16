import { Router } from "express";
import { getProducts, createProduct } from "../controllers/products.controller.js";
import { upload } from "../middlewares/upload.js";

const productsRouter = Router()

productsRouter.get("/", getProducts)
productsRouter.post("/products", upload.single("image"), createProduct)

export default productsRouter;