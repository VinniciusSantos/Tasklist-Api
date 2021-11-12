//provavelmente vai dar errado
import express from 'express';

//constante
const app = express();

//função
const resp1 = function(req,res){
    res.send("Salve")
}//Metodo1
function resp2(req,res){
    res.send("Salve2")
}//Metodo2
const resp3 = (req,res) =>{
    res.send("Salve3")
}//Metodo3
//

app.get('/',resp3)

app.listen(3000,function(){
    console.log("Application listening on port http://localhost:3000")
})