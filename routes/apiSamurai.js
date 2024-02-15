import express from "express"
import { getSamurai, postSamurai, putSamurai, deleteSamurai} from "../controllers/samuraiController.js";

const samurai = express();



samurai.get ('', getSamurai );


samurai.post('',postSamurai)


samurai.put('/:id',putSamurai)


samurai.delete('/:id',deleteSamurai)



export {samurai}