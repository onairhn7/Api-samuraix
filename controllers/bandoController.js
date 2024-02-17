import {db} from '../db/conn.js';

const getBando = async (req,res)=>{

    const sql = `select * from tbl_bando`;

    const result = await db.query(sql);

    res.json(result);


}

const postBando = async(req,res) =>{

    const {nombre} = req.body;

    const params = [nombre];

    const sql=`insert into tbl_bando 
    (nombre)
    values
    ($1) returning *`;


    const result = await db.query(sql, params);

    res.json(result);
}



const putBando = async(req,res)=>{

    const {nombre} = req.body;
    const {id} = req.params;
    
    const params =[nombre, id];

    const sql= `update tbl_bando
    set nombre = $1
    where id = $2
    returning *`;


    const result = await db.query(sql, params);

    res.json(result);

}

const deleteBando= async (req,res)=>{

    const {id} = req.params;
    const params =[id];

    const sql= `delete from tbl_bando
    where id = $1
    returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

export {getBando, postBando, putBando, deleteBando}