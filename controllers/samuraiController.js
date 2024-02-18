
import {db} from '../db/conn.js'


const getSamurai = async (req,res)=>{

    const sql = `select a.id,
    a.nombre as nombre_samurai,
    a.ataque,
    b.nombre as nombre_bando
    from tbl_samurai a 
    inner join tbl_bando b 
    on a.id_bando=b.id`;
  
    const result = await db.query(sql);
  
    res.json(result)
  
  
  }


  const postSamurai = async (req,res)=>{


    const {nombre, ataque, id_bando, id_sexo, id_estilo} = req.body;
   
 
    const params = [nombre, ataque, id_bando, id_sexo, id_estilo];
 
 
    const sql = `insert into tbl_samurai
                 (nombre, ataque, id_bando, id_estilo, id_sexo)
                 values
                 ($1, $2, $3, $4, $5) returning *`
 
     const result = await db.query(sql, params);
 
     res.json(result);
 
 
    
 
 }

 const putSamurai = async (req, res)=>{

    const {nombre, ataque, id_bando, id_estilo, id_sexo}=req.body
    const{id}=req.params

    const params=[
      nombre,
      ataque,
      id_bando,
      id_estilo,
      id_sexo,
      id
    ]

    const sql = `update tbl_samurai
              set
                nombre = $1,
                ataque = $2,
                id_bando =$3,
                id_estilo =$4,
                id_sexo =$5,
               where id = $6 returning *`

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