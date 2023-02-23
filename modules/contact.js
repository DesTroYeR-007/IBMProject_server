const router = require("express").Router();
const utility = require("../utility");
const db = require("../db/db");

router.post("/", (req, res) => {
  const { email, comment } = req.body;
  if (utility.validateNullCheck(email)) {
    try {
      db.contact.collection.insertOne({ email, comment }, (err, result) => {
        if (!err) {
          if (result) {
            res.json(
              utility.consoleAndReply(
                utility.statusCode.DB_CREATE,
                utility.message.DB_CREATE + "contact",
                result
              )
            );
          } else {
            res.json(
              utility.consoleAndReply(
                utility.statusCode.DB_CREATE_ERROR,
                utility.message.DB_CREATE_ERROR + "contact"
              )
            );
          }
        } else {
          res.json(
            utility.consoleAndReply(
              utility.statusCode.DB_CREATE_ERROR,
              utility.message.DB_CREATE_ERROR + "contact",
              err
            )
          );
        }
      });
    } catch (e) {
      res.json(
        utility.consoleAndReply(
          utility.statusCode.DB_CREATE_ERROR,
          utility.message.DB_CREATE_ERROR + "contact"
        )
      );
    }
  } else {
    res.json(
      utility.consoleAndReply(
        utility.statusCode.DB_CREATE_ERROR,
        utility.message.DB_CREATE_ERROR + "email"
      )
    );
  }
});

module.exports = router;
