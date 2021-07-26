class AlunosDAO {
    constructor(database) {
        this.db = database;
    }

    visualizaUmAluno = () => {};

    visualizaTodosAluno = () => {};

    insereAluno = (aluno) =>{
        return new Promise ((resolve, reject)=>{
            this.db.run(
                `INSERT INTO ALUNOS (NOME, TURMA, EMAIL) VALUES(?,?,?)`,
                alunos.nome,
                alunos.turma,
                alunos.email,
                (err)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(aluno)
                    }
                }
            )
        })

    };
        

    atualizaAluno = () => {};

    removeAluno = () => {}

    // module.exports = AlunosDAO;
