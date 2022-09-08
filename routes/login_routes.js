const express=require('express');
const router=express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { sequelize, Myuser } = require('../models');

const route = express.Router();
route.use(express.json());
route.use(express.urlencoded({ extended: true }));

//create user
router.post('/', (req,res) => {
    console.log(req.body);
    Myuser.findAll({where: {username:req.body.username}})
    .then(data => {
        if (bcrypt.compareSync(req.body.password, data[0].password))
        {
            const usr={
                userId:data[0].id,
                user:data[0].username
            }
            const token = jwt.sign(usr,process.env.ACCESS_TOKEN_SECRET);
            res.json({token: token});
        } else{
            res.status(400).json({ msg: "Invalid credentials"});
        }
        
    })
    .catch( err => res.status(500).json(err) );

})

module.exports = router;