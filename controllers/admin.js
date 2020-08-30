// Import class Users
const Users = require('../modules/users');

exports.getLogin = (req, res, next) => {

   let email = req.body.email;
   let password = req.body.password;

   if (Users.valid_user(email, password) === true) {
       console.log(`Valid user`);
       res.redirect('/menu');
   } else {
       console.log(`User is not valid`);
       res.redirect('/');
   }
   
};

exports.getHome = (req, res, next) => {
    res.render('home', {
        title: 'Home'
    });
};