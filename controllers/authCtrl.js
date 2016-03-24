'use strict'


const passport = require('passport')

const User = require('../models/databaseUser')
require('../services/local')


module.exports = {

    registerUser (req, res) {
        if(req.body.password === req.body.verify) {

            User.findOne({email: req.body.email}, (err,user) => {
                if(err) throw err

                if(user) {
                    res.sendStatus(403).send('there was already an email in there')
                } else {
                    User.create(req.body, (err, user) => {
                        console.log('req.body in the back end', user)
                        if(err) throw err

                        res.status(200).send('created a new profile')
                    })
                }
            })

        } else {
            res.status(401).send('passwords do not match!')
        }
    }
}


// instead of redirecting, it sends a status code 200 to the front
// module.exports.loginUser = passport.authenticate('local')
            // failureRedirect: '/#/',
            // successRedirect: '/#/main'
// })




    // loginUser: passport.authenticate('local'),
    //     function(req, res) {
    //         // If this function gets called, authentication was successful.
    //         // `req.user` contains the authenticated user.
    //         res.redirect('/#/main/')
    //         // res.sendStatus(200).send('IS THIS WORKING')
    //     }







//*******************  this could be used for something

// app.post('/login',
//   passport.authenticate('local', {
//     successRedirect: '/loginSuccess',
//     failureRedirect: '/loginFailure'
//   })
// );

// app.get('/loginFailure', function(req, res, next) {
//   res.send('Failed to authenticate');
// });

// app.get('/loginSuccess', function(req, res, next) {
//   res.send('Successfully authenticated');
// });


// *************************************************************






// app.post('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) {
//       return next(err); // will generate a 500 error
//     }
//     // Generate a JSON response reflecting authentication status
//     if (! user) {
//       return res.send(401,{ success : false, message : 'authentication failed' });
//     }
//     req.login(user, function(err){
//       if(err){
//         return next(err);
//       }
//       return res.send({ success : true, message : 'authentication succeeded' });
//     });
//   })(req, res, next);
// });
