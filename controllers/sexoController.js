import {db} from '../db/conn.js';



const getSexo = async (req,res)=>{

    const sql = `select * from tbl_sexo`;
    const result = await db.query(sql);
    res.json(result);
}