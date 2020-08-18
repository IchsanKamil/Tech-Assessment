const router = require('express').Router();
const Assessment = require('../controllers/Controller');

router.get('/', (_, res) => res.json({ message: 'welcome ^^'}))
router.post('/', Assessment.convert)

module.exports = router