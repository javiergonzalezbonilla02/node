import {Router} from 'express';
const router=Router();
import {home,login,registro} from '../controllers/controllers.js'
import {pool} from '../db/db2.js'

//creamos rutas
router.get("/",home);
router.get("/login",login);
router.get("/registro",registro);




router.get('/connect',async (req,res) => {
    const [result]=await pool.query('SELECT 1+1 AS RESULT')
    res.json(result[0])
    });

        export default router;