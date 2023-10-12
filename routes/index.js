const router = require('express').Router();
const httpConstants = require('http2').constants;
const auth = require('../middlewares/auth');

router.use('/signin', require('./signin'));
router.use('/signup', require('./signup'));

router.use(auth);
router.use('/users', require('./users'));
router.use('/cards', require('./cards'));

router.use('*', (req, res) => {
  res.status(httpConstants.HTTP_STATUS_NOT_FOUND).send({ message: 'страница не найдена' });
});

module.exports = router;
