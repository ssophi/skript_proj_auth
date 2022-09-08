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
    const user = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password,10),
        ime: req.body.ime,
        prezime: req.body.prezime,
        email: req.body.email,
        tip_clanarine: req.body.tip_clanarine
    }

    Myuser.create(user)
    .then(data => {
        const usr={
            userId:data.id,
            user:data.username
        }
        const token = jwt.sign(usr,process.env.ACCESS_TOKEN_SECRET);
        res.json({token: token});
    })
    .catch( err => res.status(500).json(err) );

})

module.exports = router;