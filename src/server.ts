import express from 'express';
import rotaUsuarios from './rotas/rotaUsuarios.ts';
import rotaPartidas from './rotas/rotaPartidas.ts';
import rotaParticipacoes from './rotas/rotaParticipacoes.ts';

const app = express();
const PORT: number = 3000;


// Middleware que faz o Express entender JSON
app.use(express.json());


// Definição das rotas dos recursos
app.use("/usuarios", rotaUsuarios);
app.use("/partidas", rotaPartidas);
app.use("/participacoes", rotaParticipacoes);



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});