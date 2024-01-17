const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const util = require("util");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "sql8.freemysqlhosting.net",
  user: "sql8677695",
  password: "HcMzSjSnfr",
  database: "sql8677695",
  port: 3306,
});

const queryAsync = util.promisify(connection.query).bind(connection);

app.post("/login", async (req, res) => {
  try {
    const posibilUtilizator = req.body;
    const query = `SELECT count(ID) AS numarInregistrari FROM users WHERE email = ? and parola = ?`;
    const raspunsCerere = await queryAsync(query, [
      posibilUtilizator.email,
      posibilUtilizator.parola,
    ]);
    const numarInregistrari = raspunsCerere[0].numarInregistrari;
    if (numarInregistrari === 1) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.error("A aparut o eroare la verificarea datelor de login.", err);
  }
});

app.post("/register", (req, res) => {
  let utilizatorNou = req.body;
  console.log(utilizatorNou);
  let lastInsertId = 0;
  if (utilizatorNou.acordOferte) utilizatorNou.acordOferte = "true";
  else utilizatorNou.acordOferte = "false";
  connection.query(
    "SELECT MAX(ID) AS lastID from users",
    (err, rows, fields) => {
      if (err) {
        console.log("A aparut o eroare la opținerea ultimului id.", err.stack);
        return;
      }
      lastInsertId = rows[0].lastID;
      $query = `INSERT INTO users (ID, EMAIL, PAROLA, NUME, PRENUME, TELEFON, DATA_NASTERII, ACORD_TERMENI, ACORD_OFERTE) VALUES('${
        lastInsertId + 1
      }','${utilizatorNou.email}', '${utilizatorNou.parola}', '${
        utilizatorNou.nume
      }', '${utilizatorNou.prenume}', '${utilizatorNou.telefon}', '${
        utilizatorNou.dataNastere
      }', 'true', '${utilizatorNou.acordOferte}');`;
      connection.query($query, (err, rows, fields) => {
        if (err) {
          console.log("A aparut o eroare la inregistrarea datelor ", err.stack);
          return;
        }
        console.log(`Au fost adaugata informatia in tabela users.`);
      });
    }
  );
});

app.get("/myaccount", (req, res) => {
  const emailCautat = req.query.email;
  async function queryMyAccount() {
    const query = `SELECT * FROM users WHERE email = ?`;
    const raspunsCerere = await queryAsync(query, [emailCautat]);
    const userCautat = {
      nume: raspunsCerere[0].NUME,
      prenume: raspunsCerere[0].PRENUME,
      telefon: raspunsCerere[0].TELEFON,
      dataNastere: raspunsCerere[0].DATA_NASTERII,
    };
    res.send(userCautat);
  }
  queryMyAccount();
});

app.post("/deleteMyAccount", (req, res) => {
  try {
    const email = req.body.email;
    async function deleteMyAccount() {
      const query = "DELETE FROM users WHERE EMAIL = ?";
      await queryAsync(query, [email]);
    }
    deleteMyAccount();
    console.log("Contul a fost sters cu succes. ");
    res.send(true);
  } catch (err) {
    console.err("Eroare la stergerea contului.", err);
  }
});

app.on("close", () => {
  connection.end(() => {
    console.log("Conexiunea la baza de date s a inchis.");
  });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Serverul a pornit pe portul ${PORT}.`);
    connection.connect((err) => {
      if (err)
        console.log(`A aparut o eroare. ${err.data} ${err.fatal} ${err.stack}`);
      else console.log("S-a stabilit conexiunea la baza de date.");
    });
  } else console.log(`A apărut o eroare, serverul nu pornește ${PORT}.`);
});
