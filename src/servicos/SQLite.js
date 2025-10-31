import * as SQLite from "expo-sqlite";

function abreConexão(){
    const database = SQLite.openDatabase("db.db")
    return database
}

export const db = abreConexão()
