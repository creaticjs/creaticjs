const controllerUser = require('../controllers/users');

module.exports = (app) => {
    
    app.get('/users', controllerUser.users);
    app.post('/users', controllerUser.postUsers);
}