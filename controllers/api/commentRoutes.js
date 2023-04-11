const router = require('express').Router();
const { Comment, Project} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
      const commentData = await 
      Comment.findAll({
          include: [{model: Project}]
      });
      res.status(200).json(commentData);
  } catch (err) {
      res.status(500).json(err);
  }
})

router.post('/:id', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        name: req.body.name,
        project_id: req.params.id
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;