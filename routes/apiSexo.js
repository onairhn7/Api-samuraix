import express from "express";

const sexo = express();

import {getSexo, postSexo, putSexo, deleteSexo} from '../controllers//sexoController.js';


sexo.get('', getSexo);
sexo.post('', postSexo);
sexo.put ('/:id', putSexo);
sexo.delete('/:id', deleteSexo);


export {sexo}