'use strict';

const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve) {
      resolve("This does nothing!")
    })
  }
}


module.exports = Question;
