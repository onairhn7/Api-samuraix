import {db} from '../db/conn.js';



const getEstilo = async (req,res)=>{

    const sql = `select * from tbl_estiloPelea`;
    const result = await db.query(sql);
    res.json(result);
}


