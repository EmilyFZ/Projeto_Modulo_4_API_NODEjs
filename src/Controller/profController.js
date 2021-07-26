//pega as informações do modelo
const Professores = require("../Models/professoresModel");


// As funções devem ser colocadas todas dentro da classe(no escopo do constructor)
class ProfessorController {
    constructor(conecta){
        this.conecta = conecta;
    }
    //Insira a função que exibe um professor (método GET)

    exibirUmProf = (req, res) => {
         const prof = req.params.nome;
    
        this.dbConn
          .getOneUser(nome)
          .then((prof) => {
            res.send(prof);
          })
          .catch((err) => {
            throw err;
          });
        }

    //Insira a função que exibe todos os professores (método GET)
    exibirTodosProfs = (req, res) => {
        this.dbConn
          .visualizaTodosProfs()
          .then((nome) => {
            res.send(nome);
          })
          .catch((err) => {
            throw err;
          });

    //Insira a função que insere um professor (método POST)

    //Insira a função que atualiza um professor (método PUT)

    //Insira a função que exclui um professor (método GET)

}

module.exports = ProfessorController;
