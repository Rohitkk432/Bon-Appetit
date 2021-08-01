var express = require('express');
var router = express.Router();
const pool = require('../pool');

//get restaurants info
router.get('/restaurant',async (req,res)=>{
    try {
        const info = await pool.query("SELECT * FROM restaurants;");
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get restaurant categories of menu
router.get('/restaurant/cat/:id',async (req,res)=>{
    try {
        const {id} = req.params
        const info = await pool.query("SELECT DISTINCT category FROM dish WHERE restaurantid = $1 ;",[id]);
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get subcategories under categories
router.get('/restaurant/subcat/:category',async (req,res)=>{
    try {
        const {category} = req.params
        const info = await pool.query("SELECT DISTINCT subcategory FROM dish WHERE category=$1;",[category]);
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get dishes under subcategory
router.get('/restaurant/dish/:subcategory',async (req,res)=>{
    try {
        const {subcategory} = req.params
        const info = await pool.query("SELECT id,name,baseprice,description,customcategoryid1,customcategoryid2 FROM dish WHERE subcategory = $1 ;",[subcategory]);
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get customization with dish id and customization id 
router.get('/dish/:id/:customcategory',async (req,res)=>{
    try {
        const {id,customcategory} = req.params
        const info = await pool.query(`SELECT customization.id,customization.name,customization.price FROM customization JOIN dish ON dish.customcategoryid${customcategory} = customization.customcategoryid WHERE dish.id = $1 ;`,[id]);
        res.json(info.rows);
    } catch (err) {
        console.error(err.message);
    }
});





module.exports = router;