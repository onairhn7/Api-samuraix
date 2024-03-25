
import { db } from '../db/conn.js'


const getSamurai = async (req, res) => {

  const sql = `
    SELECT
      a.id,
      a.nombre AS nombre_samurai,
      a.ataque,
      b.nombre AS nombre_bando,
      e.nombre AS nombre_estilo_pelea,
      s.sexo AS nombre_sexo
    FROM
      tbl_samurai a
    INNER JOIN
      tbl_bando b ON a.id_bando = b.id
    INNER JOIN
      tbl_estilopelea e ON a.id_estilo_pelea = e.id
    INNER JOIN
      tbl_sexo s ON a.id_sexo = s.id;`;

  try {
    const result = await db.query(sql);
    res.json(result);
  } catch (error) {
    console.error('Error al obtener los datos de los samuráis:', error);
    res.status(500).json({ message: 'Error al obtener los datos de los samuráis' });
  }
}


const postSamurai = async (req, res) => {

  try {
    const { nombre, ataque, id_bando, id_sexo, id_estiloPelea } = req.body;

  const params = [nombre, ataque, id_bando, id_sexo, id_estiloPelea];

  const sql = `insert into tbl_samurai
             (nombre, ataque, id_bando, id_estiloPelea, id_sexo)
             values
             ($1, $2, $3, $4, $5) returning *`


  const result = await db.query(sql, params);
  res.status(200).json(result);

  } catch (error) {
  console.error('Error al obtener los datos de los samuráis:', error);
  res.status(500).json({ message: 'Error al obtener los datos de los samuráis', error: error.message });
}
  

  




}

const putSamurai = async (req, res) => {
  const { nombre, ataque, id_bando, id_estiloPelea, id_sexo } = req.body;
  const { id } = req.params;
  const params = [nombre, ataque, id_bando, id_estiloPelea, id_sexo, id];
  const sql = `
  nombre = $1,
  ataque = $2,
  id_bando =$3,
  id_estilo =$4,
  id_estiloPelea =$4,
  id_sexo =$5,
 where id = $6 returning *`;
 
 const result = await db.query(sql,params)
    
 res.json(result);
}


const deleteSamurai = async (req, res) => {

  const params = [req.params.id];

  const sql = `delete from tbl_samurai where id = $1 returning *`;

  const result = await db.query(sql, params);


  res.json(result);



}

export { getSamurai, postSamurai, putSamurai, deleteSamurai };