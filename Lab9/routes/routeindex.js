const { render } = require('ejs');
const express = require('express');
const router = express.Router();
//const Task = require('../model/task');
const Post = require('../model/post');


router.get('/', async function(req,res){
  res.render('index');
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

router.post('/newPost', async (req,res) =>{
  var post = new Post(req.body)
  await post.save()
  res.redirect('/')
})

router.get('/edit/:id', async (req,res) =>{
  var id = req.params.id
  var post = await Post.findById(id)
  res.render('edit',{post})
})

router.post('/edit/:id', async (req,res) =>{
  var id = req.params.id
  await Post.updateOne({_id: id}, req.body)
  res.redirect('/');
})

router.get('/delete/:id', async (req,res) =>{
  var id = req.params.id
  var post = await Post.findById(id)
  res.render('delete',{post})
})

router.post('/delete/:id',  async (req,res) =>{
  var id = req.params.id
  console.log(req.params)
  await Post.remove({_id: id})
  res.redirect('/')
})

module.exports = router;


module.exports = router;