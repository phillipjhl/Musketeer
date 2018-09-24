import { Router } from 'express';
import Table from '../table';

let router = Router();

let blogs = new Table('blogs');

//respond with a list of blogs
router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        blogs.getOne(id)
        .then(blogs => {
            res.json(blogs);
        })
        .catch(err => console.log(err));
    } else {
        blogs.getAll()
        .then(blogs => {
            res.json(blogs);
        })
        .catch(err => console.log(err));
    }
});

//post one blog
router.post('/', (req, res)=>{
    //expected req.body input: {authorid: int, title: '', content: ''}
    let blog = req.body;
    blogs.insert(blog)
    .then(id=>{
        res.json(id);
    });
});

export default router;