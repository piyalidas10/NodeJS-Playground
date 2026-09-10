const Users = require("../models/users");

exports.renderSignUp = (req,res)=>{
    const cookie = req.session.isLoggedIn;

    res.render('sign-up', {isLoggedIn:cookie});
}

exports.registerUser = (req,res)=>{
    const {userName,password,confirmPassword} = req.body;

    const users = new Users(null,userName,password);

    users.insertUser()
        .then(()=>{
            res.redirect('/');
        })
}

exports.renderLogin = (req,res)=>{
    const cookie = req.session.isLoggedIn;
    
    res.render("login", {isLoggedIn:cookie});
}

exports.validateLogin = (req,res)=>{
    const {userName,password} = req.body;

    Users.fetchUserByUsername(userName)
        .then(([ [userCredentials], tInfo ])=>{
            if(userCredentials){
                if(userCredentials.password===password){
                    req.session.isLoggedIn = "true"
                    res.redirect('/');
                }else{
                    req.session.isLoggedIn = "invalidPassword"
                    res.redirect('/login');
                }
            }else{
                req.session.isLoggedIn = "invalidUsername"
                res.redirect('/login');
            }
        })
}

exports.logout = (req,res)=>{
    req.session.destroy(req.session.id);
    res.redirect('/');
}