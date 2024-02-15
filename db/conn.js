import pg from 'pg-promise';

const pgp = pg()

const cnstr = `postgresql://postgres:N1706e18ls.@localhost:5432/api_samuraix`;


const db = pgp (cnstr);


db.connect()
    .then (()=>{

        console.log("conexion exitosa chiki");
    })

    .catch((err)=>{

        console.log(`error de conexion chiki ${err}`)

    })

    export {db}