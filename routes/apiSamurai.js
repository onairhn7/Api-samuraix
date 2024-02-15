import express from "express"
import {db} from '../db/conn.js'

const samurai = express();



samurai.get ('', async (req,res)=>{

  const sql = `select * from tbl_samurai order by id`;

  const result = await db.query(sql);

  res.json(result)



})


samurai.post('',async (req,res)=>{


   const {nombre, ataque} = req.body;
  

   const params = [nombre, ataque];


   const sql = `insert into tbl_samurai
                (nombre, ataque)
                values
                ($1, $2) returning *`

    const result = await db.query(sql, params);

    res.json(result);


   

})


samurai.put('/:id',async (req, res)=>{

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


})


samurai.delete('/:id', async (req,res)=>{

  const params = [req.params.id];

  const sql = `delete from tbl_samurai where id = $1 returning *`;

  const result = await db.query(sql,params);


  res.json(result);



})



export {samurai}