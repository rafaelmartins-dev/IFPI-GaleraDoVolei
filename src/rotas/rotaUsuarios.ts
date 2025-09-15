import {Router} from "express";

const rota: Router = Router();

let usuarios = [
    {id: 1, nome: "José", cpf: "123.456.789-00", sexo: "M", dt_nasc: "1990-01-01", email: "jose@example.com", phone: "(11) 91234-5678"},
    {id: 2, nome: "Maria", cpf: "987.654.321-00", sexo: "F", dt_nasc: "1985-05-15", email: "maria@example.com", phone: "(11) 98765-4321"},
    {id: 3, nome: "Ana", cpf: "456.789.123-00", sexo: "F", dt_nasc: "1992-03-22", email: "ana@example.com", phone: "(11) 91234-5678"},
    {id: 4, nome: "Carlos", cpf: "321.654.987-00", sexo: "M", dt_nasc: "1988-07-30", email: "carlos@example.com", phone: "(11) 98765-4321"}
];


rota.get("/", (req, res)=> {
   
    res.status(200).send(usuarios);
})



export default rota;