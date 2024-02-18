import express from "express";

const estilo = express();

import {getEstilo, postEstilo, putEstilo, deleteEstilo} from '../controllers//estiloController.js';


estilo.get('', getEstilo);
estilo.post('', postEstilo);
estilo.put ('/:id', putEstilo);
estilo.delete('/:id', deleteEstilo);


export {estilo}