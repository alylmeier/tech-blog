const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes); //HTML
router.use('/api', apiRoutes); //DATA

module.exports = router;
