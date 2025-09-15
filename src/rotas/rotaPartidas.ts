import { Router } from "express";

const rota: Router = Router();

let partidas = [
    {id: 1, adminId: 1, titulo: "Partida 1", descricao: "Descrição da Partida 1", data: "2023-10-01", hora: "15:00", local: "Estádio A", tipo: "Publica", situacao: "em adesão"},
    {id: 2, adminId: 2, titulo: "Partida 2", descricao: "Descrição da Partida 2", data: "2023-10-05", hora: "18:00", local: "Estádio B", tipo: "Privada", situacao: "adesão encerrada"},
    {id: 3, adminId: 3, titulo: "Partida 3", descricao: "Descrição da Partida 3", data: "2023-10-10", hora: "20:00", local: "Estádio C", tipo: "Publica", situacao: "em andamento"},
    {id: 4, adminId: 4, titulo: "Partida 4", descricao: "Descrição da Partida 4", data: "2023-10-15", hora: "17:00", local: "Estádio D", tipo: "Privada", situacao: "finalizada"}
];

rota.get("/", (req, res) => {

    res.status(200).send(partidas);
})

export default rota;