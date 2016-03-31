'use strict';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/databaseUser');





passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    console.log('deserializing', id)
    User.findById(id, done);
});

passport.use(new LocalStrategy ({
        usernameField: 'email',
        passwordField: 'password'
    },
    (email, password, done) => {
        User.findOne({ email: email }, (err, user) => {
            if (err) throw err;
            console.log('this is the user email found on auth User.findOne', user)
            if (user) {
                user.authenticate(password, (err, valid) => {
                    if (err) throw err;
                    // console.log(valid)
                    if (valid) {
                        console.log("Logged in");
                        done(null, user);
                    } else {
                        console.log("Not logged in")
                        done();
                    }
                });
            } else {
                console.log("No user");
                done();
            }
        });
    })
);
