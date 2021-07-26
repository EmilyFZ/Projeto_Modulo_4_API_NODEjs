class AlunosDAO {
    constructor(database) {
        this.db = database;
    }
    //show
    visualizaUmAluno = (nome) => {
            return new Promise((resolve, reject) => {
              this.db.get(
                "SELECT * FROM USUARIOS WHERE NOME LIKE ?",
                nome,
                (err, rows) => {
                  if (!err) {
                    resolve(rows);
                  } else {
                    reject(err);
                  }
                }
            });
          };
    };
    //index 
    visualizaTodosAlunos = () => {
        
            return new Promise((resolve, reject) => {
              this.db.all("SELECT * FROM ALUNOS", (err, rows) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(rows);
                }
              });
            });
    };
    
    insereAluno = () => {};

    atualizaAluno = () => {};

    removeAluno = () => {}

    // module.exports = AlunosDAO;