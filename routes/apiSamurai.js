import express from "express"

const samurai = express();

let samurais = [{

    nombre : "kenchin",
    ataque : "hiten"

},
{    
    nombre : "Makoto",
    ataque : "mugen"

}]

samurai.get ('', (req,resp)=>{

    resp.json(samurais);



})


samurai.post('',(req,res)=>{

    
})

export {samurai}