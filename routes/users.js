var express = require("express");
var router = express.Router();

/*
router.post("/", function (req, res) {
  res.send(req.body);
});*/

// adiciona usuario no array
let users = { items: [] };
router.post("/", (req, res) => {
  users.items.push(req.body);
  res.send("OK!");
});

/* lista usuarios */
router.get("/", function (req, res, next) {
  res.send(users);
});

router.delete("/:email", function (req, res) {
  usuario = req.params.email;

  // função para deletar o item do array usuario no index correto
  function verificaEmail(valor, index) {
    if (valor.email == usuario) {
      users.items.splice(index, 1);
    }
  }
  users.items.forEach(verificaEmail);

  res.send("OK!");
});

module.exports = router;
