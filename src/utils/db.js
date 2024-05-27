require("dotenv").config()
const ms = require("mysql2")

function sqlQuery(sql, data) {
  return new Promise((resolve, reject) => {
    let con = ms.createConnection({
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    })

    con.connect(function (err) {
      if (err) throw err
      // console.log("Connected to MySQL Server!")
    })
    // console.log(sql)
    con.query(sql, data, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })

    con.end((err) => {
      if (err) {
        console.error("Error closing MySQL connection:", err)
        reject(err)
      } else {
        // console.log("Connection Terminated!")
      }
    })
  })
}

module.exports = {sqlQuery}
