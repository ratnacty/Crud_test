import express from "express";
import { PrismaClient } from "@prisma/client";
import { authToken } from "../middleware/auth.js";

import {register, login, logout, getOneUser, getUserById, getAllUser, updateUser} from "../controllers/user.js"
import {getAllProduct, getProductById, updateProduct, deleteProduct, createProduct, searchProduct} from "../controllers/product.js"

const prisma = new PrismaClient();
const router = express.Router();

// auth
router.post("/registeruser", register)
router.post("/login", login)
router.post("/logout", logout)

// user
router.get("/users", authToken, getAllUser )
router.get("/user", authToken, getOneUser )
router.get("/user/:id", authToken, getUserById)
// update user that was login
router.put("/user", authToken, updateUser)

// product
router.get("/products" , authToken, getAllProduct)
router.get("/products/:id", authToken,getProductById)
router.post("/products", authToken, createProduct)
router.put("/products/:id", authToken, updateProduct)
router.delete("/products/:id", authToken, deleteProduct)
// search product
router.get("/search", authToken, searchProduct)


export default router;