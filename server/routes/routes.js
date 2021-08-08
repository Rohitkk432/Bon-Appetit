var express = require('express');
var router = express.Router();
const pool = require('../pool');

//getting full users table
router.get('/users',async (req,res)=>{
    try {
        const info = await pool.query("SELECT * FROM users;");
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//adding new user
router.post('/users',async (req,res)=>{
    try {
        const {email,name}=req.body;
        const newUser = await pool.query("INSERT INTO users (name,email,address) VALUES ($1,$2,'BITS Pilani Goa Campus') RETURNING *;",[name,email]);
        res.json(newUser.rows[0]);
    } catch (err) {
        // console.error(err.message); --> to stop error message in console
    }
});

//orders table
router.get('/orders',async (req,res)=>{
    try {
        const info = await pool.query("SELECT * FROM orders;");
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get restaurants info
router.get('/restaurant',async (req,res)=>{
    try {
        const info = await pool.query("SELECT * FROM restaurants;");
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//adding order
router.post('/orders',async (req,res)=>{
    try {
        const {userid,dishid,customizationId1,customizationId2,baseprice,finalprice,status}=req.body;
        const newOrder = await pool.query("INSERT INTO orders (userid,dishid,customizationId1,customizationId2,baseprice,finalprice,status) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;",[userid,dishid,customizationId1,customizationId2,baseprice,finalprice,status]);
        res.json(newOrder.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//get all dishes
router.get('/dishes',async (req,res)=>{
    try {
        const info = await pool.query("SELECT * FROM dish;");
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//getting customcategory table
router.get('/customcategory',async (req,res)=>{
    try {
        const info = await pool.query("SELECT * FROM customcategory;");
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//getting customization table
router.get('/customization',async (req,res)=>{
    try {
        const info = await pool.query("SELECT * FROM customization;");
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});





module.exports = router;