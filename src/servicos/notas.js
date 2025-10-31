import {db} from "./SQLite";

export function criaTabela(){
    db.transaction((transaction)=> {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS" +
            "Notas" + "(id INTEGER PRIMARY KEY AUTOINCREMENT, Titulo TEXT, categoria TEXT, texto TEXT);"
        )
    })
}