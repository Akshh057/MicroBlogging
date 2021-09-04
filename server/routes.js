const router = require('express').Router();
const { query } = require('express');
const Blog = require('./Models/Model')
router.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from API" })
})

router.post('/addBlog', async (req, res) => {
    try {
        const { Title, Body } = req.body;
        if (!Title || !Body)
            return res.status(403).json({ message: "Please enter Title/Body" })

        const newBlog = new Blog({
            Title,
            Body,
            Likes: 0
        })

        const blog = await newBlog.save();

        blog && res.status(200).json({ message: blog })

    } catch (err) {
        return res.status(500).json(err)
    }

})

router.get('/getAllBlogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        blogs && res.status(200).json(blogs)
    } catch (err) {
        return res.status(500).json(err)
    }
})

router.put('/updateBlog/:id', async (req, res) => {
    // const { Title, Body } = req.body;
    try {
        const { id } = req.params;
        const blog = await Blog.findByIdAndUpdate(id, {
            $set: req.body
        })
        blog && res.status(200).json(blog)

    } catch (err) {
        res.status(500).json(err)
    }

})

router.get('/search', async (req, res) => {
    try {
        console.log(req.query.s)
        const result = await Blog.find({
            $text: { $search: req.query.s }
        })
        result && res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedblog = await Blog.findByIdAndDelete(req.params.id)
        const newBlogs = await Blog.find();
        if (deletedblog && newBlogs) res.status(200).json(newBlogs);
        else return res.json({ message: "User not deleted" })
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router