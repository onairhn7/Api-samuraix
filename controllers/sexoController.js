import {db} from '../db/conn.js';



const getSexo = async (req,res)=>{

    const sql = `select * from tbl_sexo`;
    const result = await db.query(sql);
    res.json(result);
}

const postSexo = async(req,res) =>{

    const {sexo} = req.body;

    const params = [sexo];

    const sql=`insert into tbl_sexo 
    (sexo)
    values
    ($1) returning *`;


    const result = await db.query(sql, params);

    res.json(result);
}


const putSexo = async(req,res)=>{

    const {sexo} = req.body;
    const {id} = req.params;
    
    const params =[sexo, id];

    const sql= `update tbl_sexo
    set sexo = $1
    where id = $2
    returning *`;


    const result = await db.query(sql, params);

    res.json(result);

}

const deleteSexo= async (req,res)=>{

    const {id} = req.params;
    const params =[id];

    const sql= `delete from tbl_sexo
    where id = $1
    returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}


export {getSexo, postSexo, putSexo, deleteSexo}