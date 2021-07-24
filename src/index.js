const express = require("express");
const cors = require("cors")

//Configura porta do servidor
const {APP_PORT} = require("./Config/appConfig");

//importa classes que controlam as requisições de Alunos e Professores
const ProfessorController = require("./Controller/profController");
const AlunoController = require("./Controller/alunosController");

//importa conexão com a base de dados
const database = require("./infra/sqlite-db");

//Importa objetos de acesso aos dados
const ProfessorDAO = require("./DAO/profDao");
const AlunosDAO = require("./DAO/alunosDao");


//instacia DAO para os controllers
const profesDAO = new ProfessorDAO(database);
const alunosDAO = new AlunosDAO(database);

// instancia controllers
const professorController = new ProfessorController(profesDAO);
const alunoController = new AlunoController(alunosDAO);

//Cria aplicação
const app = express();

//Invoca o cors para permitir requisições
app.use(cors());

//Middleware para fazer Json Parse nas requisições
app.use(express.json());

//Rota de teste

app.get("/",function(req, res){
    res.send({message:"Rota inicial"})
});
//Define rotas de professor
app.get
app.get
app.post
app.put
app.delete
//Define rotas de alunosDAO
app.get
app.get
app.post
app.put
app.delete

//Servidor rodando na porta 3000
app.listen(APP_PORT, ()=> {
    console.log(`Aplicação escutando a porta ${APP_PORT}`);
});