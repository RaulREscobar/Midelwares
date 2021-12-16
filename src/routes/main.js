let express = require('express');
let router = express.Router();
let adminMiddleware = require('../meddlewares/adminUsers')

let controller = require('../controllers/mainController')

router.get('/', controller.index)

router.get('/admin', adminMiddleware , controller.admin)



module.exports= router