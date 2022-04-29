const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('coeyDB');

const initDB = () => {
    db.serialize(() => {
        db.prepare("drop table users").run().finalize();
        db.run("CREATE TABLE IF NOT EXISTS users (username TEXT,password TEXT)");
       
        const stmt = db.prepare("INSERT INTO users VALUES (?,?)");
        stmt.run(['coey','1234']);
        stmt.finalize();
    
        db.each("SELECT * FROM users", (err, row) => {
            console.log( row);
        });
    });
    return db;
    db.close();
}

module.exports = initDB;