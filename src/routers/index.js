// const { validarToken } = require('../utils/token');
module.exports = function (app) {
    app.use('/test', require('./test_conection/test'));
    app.use('/users', require('./user/user'));
    // app.use(validarToken);
    app.use('/puntuacion', require('./puntuacion/puntuacion'));
}