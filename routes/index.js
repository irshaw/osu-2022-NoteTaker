const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const tipsRoutes = require('./api/tips');


router.use('/api/apiRoute', apiRoutes);

router.use('/', htmlRoutes);

module.exports = router;