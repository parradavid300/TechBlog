const router = require('express').Router();
const userRoutes = require('./user-routes');
const projectRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes);
router.use('/post', projectRoutes);
router.use('/comment', commentRoutes);

module.exports = router;