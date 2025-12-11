const express = require("express")

const router = express.Router()



const { readAllBlogs, createBlog, updateblog, deleteblog} = require("../controllers/postController")



router.get("/", readAllBlogs)

router.post("/", createBlog)

router.put("/:id", updateblog)

router.delete("/:id", deleteblog)


module.exports = router;



