
import {db} from '../db/conn.js'


const getSamurai = async (req,res)=>{

    const sql = `
  SELECT
    a.id,
    a.nombre AS nombre_samurai,
    a.ataque,
    b.nombre AS nombre_bando,
    e.nombre_estilo AS nombre_estilo_pelea,
    s.sexo AS nombre_sexo
  FROM
    tbl_samurai a
  INNER JOIN
    tbl_bando b ON a.id_bando = b.id
  INNER JOIN
    tbl_estilopelea e ON a.id_estilo = e.id
  INNER JOIN
    tbl_sexo s ON a.id_sexo = s.id;`;
  
    const result = await db.query(sql);
  
    res.json(result)
  
  
  }


  const postSamurai = async (req,res)=>{


    const {nombre, ataque, id_bando, id_sexo, id_estiloPelea} = req.body;

const params = [nombre, ataque, id_bando, id_sexo, id_estiloPelea];

const sql = `insert into tbl_samurai
             (nombre, ataque, id_bando, id_estiloPelea, id_sexo)
             values
             ($1, $2, $3, $4, $5) returning *`

 
     const result = await db.query(sql, params);
 
     res.json(result);
 
 
    
 
 }

 const putSamurai = async (req, res) => {
  const { nombre, ataque, id_bando, id_estiloPelea, id_sexo } = req.body;
  const { id } = req.params;
  const params = [nombre, ataque, id_bando, id_estiloPelea, id_sexo, id];
  const sql = `
      UPDATE tbl_samurai
      SET
          nombre = $1,
          ataque = $2,
          id_bando = $3,
          id_estiloPelea = $4,
          id_sexo = $5
      WHERE
          id = $6
      RETURNING *`;
  const result = await db.query(sql, params);
  res.json(result.rows[0]);
}


const deleteSamurai = async (req,res)=>{

    const params = [req.params.id];
  
    const sql = `delete from tbl_samurai where id = $1 returning *`;
  
    const result = await db.query(sql,params);
  
  
    res.json(result);
  
  
  
  }

  export {getSamurai, postSamurai, putSamurai, deleteSamurai};