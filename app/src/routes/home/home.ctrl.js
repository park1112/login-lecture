"use strict";

// const UserStorage = require("../../models/UserStorage");


// const { render, response } = require("../../../app");
const User = require("../../models/User");



const output = {
    home : (req, res) => {
        res.render("home/index");    
    },
    login : (req, res) => {
        res.render("home/login");      
    },
    register: (req, res) => {
        res.render("home/register")
    },
}; 

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        console.log(response);
        return res.json(response);

        // const id = req.body.id,
        //     psword = req.body.psword;

        // console.log(UserStorage.getUsers());
        
        
        // const response = {};
        // // if (users.id.includes(id)) {
        // //     const idx = users.id.indexOf(id);
        // //     if (users.psword[idx] === psword) {
        // //         response.success = true;
        // //         response.msg = "로그인 성공!!"
        // //         return res.json(response);    
        // //     }
        // // }
        
        // response.success = false;
        // response.msg = "로그인 실패 !!";
        // return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        console.log(response);
        return res.json(response);
    },
};


module.exports = {
    output,
    process,
};



