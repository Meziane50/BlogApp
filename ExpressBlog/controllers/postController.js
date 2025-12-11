const fs = require("fs");
const blogs = require("../models/post")

// GET Method
const readAllBlogs = (req, res) => {
    res.json(blogs)
}

// POST METHOD
const createBlog = (req, res) => {
    const infos = req.body;
    try{
        blogs.push(infos);
        fs.writeFileSync(
           "./models/post.js",
           `const blogs = ${JSON.stringify(
            blogs,
            null,
            2
           )}\n\nmodule.exports = blogs;`
        )
        console.log(blogs)
        res.send("blog created")
    }catch(e){
        console.log(e)
    }
}

// PUT METHODE 
const updateblog = (req, res) => {
    let blogId = parseInt(req.params.id)
    let updateInfos = req.body 
  let blogIndex = blogs.findIndex((blog) => blog.id === blogId);
    if (blogIndex !== -1){
        blogs[blogIndex] = {... blogs[blogIndex], ...updateInfos}
    fs.writeFileSync(
       "./models/post.js",
       `const blogs = ${JSON.stringify(
        blogs,
        null,
        2
       )}\n\nmodule.exports = blogs;`
    )
    res.send("blog updated")    
} else {
    res.status(404).send("blog not found")
 }
}

//DELETE METHODE
const deleteblog = (req, res) => {
    let blogId = parseInt(req.params.id)
    let blogIndex = blogs.findIndex((blog) => blog.id === blogId)
    if (blogIndex !== -1){
        blogs.splice(blogIndex,1)
     fs.writeFileSync(
       "./models/post.js",
       `const blogs = ${JSON.stringify(
        blogs,
        null,
        2
       )}\n\nmodule.export = blogs;`
    )
    res.send("blog deleted")    
} else {
    res.status(404).send("blog not found")
 }
}

module.exports = {
    readAllBlogs,
    createBlog,
    updateblog,
    deleteblog
}
