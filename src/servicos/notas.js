import {db} from "./SQLite";

export function criaTabela(){
    db.transaction((transaction)=> {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS" +
            "Notas" + "(id INTEGER PRIMARY KEY AUTOINCREMENT, Titulo TEXT, categoria TEXT, texto TEXT);"
        )
    })
}
export async function adicionarNota(nota) {
    return new promise ((resolve)=>{
        db.transaction((transaction)=>{
            transaction.executeSql("INSERT INTO Notastitulo, categoria,texto)"+
                "VALUES (?,?,?);",[nota.título, nota.categoria, nota.texto],()=>{
                    resolve("Nota adicionada com sucesso!")
                }
            )
        })
    })
    
}

export async function buscaNotas() {
    return new Promise((resolve)=>{
    db.transaction((transaction)=>{
        transaction.executeSql("SELECT * FROM Notas;",[], (transaction, resultado)=>{
            resolve(resultado.rows._array)
        })
    })
})
}



