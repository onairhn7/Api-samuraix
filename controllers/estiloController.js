import {db} from '../db/conn.js';



const getEstilo = async (req,res)=>{

    const sql = `select * from tbl_estiloPelea`;
    const result = await db.query(sql);
    res.json(result);
}

const postEstilo = async(req,res) =>{

    const {nombre_estilo} = req.body;

    const params = [nombre_estilo];

    const sql=`insert into tbl_estiloPelea 
    (nombre_estilo)
    values
    ($1) returning *`;


    const result = await db.query(sql, params);

    res.json(result);
}


const putEstilo = async(req,res)=>{

    const {nombre_estilo} = req.body;
    const {id} = req.params;
    
    const params =[nombre_estilo, id];

    const sql= `update tbl_estiloPelea
    set nombre_estilo = $1
    where id = $2
    returning *`;


    const result = await db.query(sql, params);

    res.json(result);

}

const deleteEstilo= async (req,res)=>{

    const {id} = req.params;
    const params =[id];

    const sql= `delete from tbl_estiloPelea
    where id = $1
    returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}


export {getEstilo, postEstilo, putEstilo, deleteEstilo}


