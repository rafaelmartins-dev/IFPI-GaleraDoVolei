# 🏐 Galera do Vôlei API

Este projeto é uma **API simples** para organizar partidas de vôlei em uma comunidade online.  
Foi criado com fins de **aprendizado**, utilizando **Node.js + TypeScript + Express + Prisma + SQLite**.  

A ideia é começar **simples** e ir evoluindo aos poucos, adicionando recursos como grupos de usuários, convites privados e suporte a outros esportes.

---

## ⚙️ Tecnologias utilizadas
- **Node.js**
- **TypeScript**
- **Express** (framework HTTP)
- **Prisma** (ORM)
- **SQLite** (banco de dados leve)

---

## 📂 Estrutura inicial do projeto

```
src/
 ├── routes/              # Rotas da API
 │   ├── usuarios.ts
 │   ├── partidas.ts
 │   └── participacoes.ts
 ├── db.ts                # Conexão com o Prisma
 ├── server.ts            # Ponto de entrada do servidor
 └── docs/
     └── api.md           # Documentação dos endpoints
```

---

## 🎯 Objetivo inicial
- Criar e listar **usuários**.  
- Criar e listar **partidas**.  
- Solicitar e gerenciar **participações** em partidas.  

**Sem autenticação por enquanto** → qualquer usuário pode interagir livremente.  
A autenticação será adicionada em etapas futuras.

---

## 📌 Endpoints

### 👤 Usuários

#### ➕ Criar usuário
- **POST** `/usuarios`  
- **Body**:
```json
{
  "nome": "João",
  "email": "joao@email.com",
  "sexo": "M",
  "idade": 25
}
```
- **Response 201**:
```json
{
  "id": 1,
  "nome": "João",
  "email": "joao@email.com",
  "sexo": "M",
  "idade": 25
}
```

#### 📋 Listar usuários
- **GET** `/usuarios`  
- **Query params (opcional)**:  
  - `sexo=M` → filtra por sexo  
  - `idadeMin=18&idadeMax=30` → filtra por faixa etária  
- **Response 200**:
```json
[
  {
    "id": 1,
    "nome": "João",
    "email": "joao@email.com",
    "sexo": "M",
    "idade": 25
  }
]
```

---

### 🏐 Partidas

#### ➕ Criar partida
- **POST** `/partidas`  
- **Body**:
```json
{
  "titulo": "Vôlei de sábado",
  "descricao": "Partida amistosa",
  "local": "Quadra Central",
  "dataHora": "2025-09-20T15:00:00Z",
  "tipo": "publica",
  "categoria": "adulto",
  "adminId": 1
}
```
- **Response 201**:
```json
{
  "id": 1,
  "titulo": "Vôlei de sábado",
  "descricao": "Partida amistosa",
  "local": "Quadra Central",
  "dataHora": "2025-09-20T15:00:00.000Z",
  "tipo": "publica",
  "categoria": "adulto",
  "situacao": "nova",
  "adminId": 1
}
```

#### 📋 Listar partidas
- **GET** `/partidas`  
- **Query params (opcional)**:  
  - `tipo=publica` → apenas públicas  
  - `categoria=adulto` → filtra por categoria  
- **Response 200**:
```json
[
  {
    "id": 1,
    "titulo": "Vôlei de sábado",
    "local": "Quadra Central",
    "dataHora": "2025-09-20T15:00:00.000Z",
    "tipo": "publica",
    "categoria": "adulto",
    "situacao": "nova",
    "adminId": 1,
    "admin": { "id": 1, "nome": "João" },
    "participacoes": []
  }
]
```

---

### ✅ Participações

#### ➕ Solicitar participação
- **POST** `/participacoes`  
- **Body**:
```json
{
  "usuarioId": 2,
  "partidaId": 1
}
```
- **Response 201**:
```json
{
  "id": 1,
  "usuarioId": 2,
  "partidaId": 1,
  "status": "pendente"
}
```

#### ✏️ Atualizar status
- **PUT** `/participacoes/:id`  
- **Body**:
```json
{ "status": "aceito" }
```
- **Response 200**:
```json
{
  "id": 1,
  "usuarioId": 2,
  "partidaId": 1,
  "status": "aceito"
}
```

---

## 🚧 Próximos passos (futuro)
- Implementar **autenticação** com JWT.  
- Criar **grupos de usuários** para convites em massa.  
- Suporte a **outros esportes** além do vôlei.  
- Funcionalidades sociais (amizades, feed, notificações).  
