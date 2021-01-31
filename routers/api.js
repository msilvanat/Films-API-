const router = require('express').Router();

//const { route } = require('./api/films');
const middlewares = require('./middlewares');
const apiFilmsRouter = require('./api/films');
const apiUsersRouter = require('./api/users');

router.use('/films', middlewares.checkToken, apiFilmsRouter); //todas las rutas para films pasan primetpkenro por check
router.use('/users', apiUsersRouter);


module.exports = router;