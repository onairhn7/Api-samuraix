import express from "express";


const bando = express();

import {getBando, postBando, putBando, deleteBando} from '../controllers/bandoController.js';


bando.get('', getBando);
bando.post('', postBando);
bando.put ('/:id', putBando);
bando.delete('/:id', deleteBando);


export {bando}