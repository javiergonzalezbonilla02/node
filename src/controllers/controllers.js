import { pool } from "../db/db2.js";

export const home=(req,res)=>res.render('home',{title:'Home'})

export const login=(req,res)=>res.render("login",{title:'login'}) 

export const registro=(req,res)=>res.render("registro",{title:'registro'})

export const insertUsers= async (req,res)=>{

    await pool.query('SELECT 1+1 AS RESULT')
}