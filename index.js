import express from 'express';
import {samurai} from './routes/apiSamurai.js'
const app = express();


// middlewares

app.use(express.json());
const port = 4000;

app.use('/api/samurai', samurai)


app.listen(port, ()=>{

	console.log(`escuchando en el puerto ${port}`)
});
