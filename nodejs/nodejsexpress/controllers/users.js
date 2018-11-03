const dbUsers = require('../db/db');
module.exports = {
   users: (req,res) => { //Get

       res.send(dbUsers);
       console.log('Hola Usuarios')
   },
   postUsers: (req, res) =>{
       console.log(req.body)
        res.send('POST MVC');
   }
}