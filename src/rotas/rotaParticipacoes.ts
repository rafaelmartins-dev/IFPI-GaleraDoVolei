import {Router} from 'express';

const rota: Router = Router();

let participacoes = [
    {id: 1, usuarioId: 1, partidaId: 1, status: "pendente", presencaConfirmada: false},
    {id: 2, usuarioId: 2, partidaId: 1, status: "aceita", presencaConfirmada: true},
    {id: 3, usuarioId: 3, partidaId: 2, status: "recusada", presencaConfirmada: false},
    {id: 4, usuarioId: 4, partidaId: 3, status: "aceita", presencaConfirmada: true}
];

rota.get("/", (req, res) => {

    res.status(200).send(participacoes);
});

export default rota;