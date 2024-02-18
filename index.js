import express from 'express';
import {samurai} from './routes/apiSamurai.js'
import { bando } from './routes/apiBando.js';
import { estilo } from './routes/apiEstilo.js';
import { sexo } from './routes/apiSexo.js';

const app = express();


// middlewares

app.use(express.json());
const port = 4000;

app.use('/api/samurai', samurai)

app.use('/api/bando', bando )

app.use('/api/estilo', estilo )

app.use('/api/sexo', sexo )


app.listen(port, ()=>{

	console.log(`escuchando en el puerto ${port}`)
});
