'use strict';

const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve) {
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        cntent TEXT
        )`
      db.run(sql, function(){
      resolve("question table created")
      })
    })
  }
}



module.exports = Question;
