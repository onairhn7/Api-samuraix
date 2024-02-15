
import {db} from '../db/conn.js'


const getSamurai = async (req,res)=>{

    const sql = `select * from tbl_samurai order by id`;
  
    const result = await db.query(sql);
  
    res.json(result)
  
  
  }


  const postSamurai = async (req,res)=>{


    const {nombre, ataque} = req.body;
   
 
    const params = [nombre, ataque];
 
 
    const sql = `insert into tbl_samurai
                 (nombre, ataque)
                 values
                 ($1, $2) returning *`
 
     const result = await db.query(sql, params);
 
     res.json(result);
 
 
    
 
 }

 const putSamurai = async (req, res)=>{

    const {nombre, ataque}=req.body
    const{id}=req.params

    const params=[
      nombre,
      ataque,
      id
    ]

    const sql = `update tbl_samurai
              set
                nombre = $1,
                ataque = $2
               where id = $3 returning *`

    const result = await db.query(sql,params)
    
    res.json(result);


}


const deleteSamurai = async (req,res)=>{

    const params = [req.params.id];
  
    const sql = `delete from tbl_samurai where id = $1 returning *`;
  
    const result = await db.query(sql,params);
  
  
    res.json(result);
  
  
  
  }

  export {getSamurai, postSamurai, putSamurai, deleteSamurai};