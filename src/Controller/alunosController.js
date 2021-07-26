//pega as informações do modelo
const Alunos = require("../Models/alunosModel");


// As funções devem ser colocadas todas dentro da classe(no escopo do constructor)
class AlunoController {
    constructor(conecta){
        this.conecta = conecta;
    }
    exibirUmAluno = (req, res) => {

    
    const aluno = req.params.nome;

    this.dbConn
      .getOneUser(nome)
      .then((aluno) => {
        res.send(aluno);
      })
      .catch((err) => {
        throw err;
      });
    }

    //Insira a função que exibe todos alunos (método GET)

    exibirTodosAlunos = (req, res) => {
        this.dbConn
          .visualizaTodosAlunos()
          .then((nome) => {
            res.send(nome);
          })
          .catch((err) => {
            throw err;
          });

    //Insira a função que insere um aluno (método POST)
        
atualizaAluno =(req, res) => {
    const atualiza = req.params.nome
    const {nome, turma, email} = req.body
    const aluno = new Aluno (nome, turma, email)

    this.conecta
    .insereAluno (atualiza, aluno)
    .then(()=>{
        res.send({message:"Alterado Aluno"})
    })
    .catch((err)=>{
        throw (err)
    })
    
}
    //Insira a função que atualiza um aluno (método PUT)

    //Insira a função que exclui um aluno (método GET)

}

module.exports = AlunoController;
