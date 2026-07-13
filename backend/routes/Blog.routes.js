import express from "express";
import { Create, deletePost, getposts, update, toggleLikeBlog } from "../controllers/Blog.controller.js";
import { isAdmin } from "../middleware/isAdmin.middleware.js";
import  upload  from "../middleware/Multer.middleware.js";
import { isLogin }  from "../middleware/isLogin.middleware.js";

const BlogRoutes=express.Router();

BlogRoutes.post('/create', isAdmin, upload.single('postimg'), Create)
BlogRoutes.delete('/delete/:id',isAdmin, deletePost)
BlogRoutes.get('/getposts', getposts)
BlogRoutes.patch('/update/:id',isAdmin, upload.single('postimage'), update)

BlogRoutes.put("/:blogId/like", isLogin, toggleLikeBlog);

export default BlogRoutes;