class ProfessorDAO {
    constructor(database) {
        this.db = database;
    }

    visualizaUmProf = () => {

    };

    visualizaTodosProfs = () => {

    };

    insereProf = (professor) =>{
        return new Promise ((resolve, reject)=>{
            this.db.run(
                `INSERT INTO PROFESSORES (NOME, DISCIPLINA, EMAIL) VALUES(?,?,?)`,
                professor.nome,
                professor.disciplina,
                professor.email,
                (err)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(professor)
                    }
                }
            )
        })

    };
    };

    atualizaProf = () => {

    }


    removeProf = () => {

    }

    //module.exports = AlunosDAO;
