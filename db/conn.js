import pg from 'pg-promise';

import dotenv from 'dotenv';

dotenv.config();

const pgp = pg()

const user= process.env.USER;
const pass= process.env.PASS;
const dataBase = process.env.DATABASE;
const host= process.env.HOST;
const portDb= process.env.PORT_DB;

const cnstr = `postgresql://${user}:${pass}@${host}:${portDb}/${dataBase}`;


const db = pgp (cnstr);


db.connect()
    .then (()=>{

        console.log("conexion exitosa chiki");
    })

    .catch((err)=>{

        console.log(`error de conexion chiki ${err}`)

    })

    export {db}