const router = require("express").Router();
const utility = require("../utility");
const db = require("../db/db");
var SHA256 = require("crypto-js/sha256");

router.get("/", (req, res) => {
  res.json({ statusCode: 200, message: "Connected to users" });
});

//SignUp
router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  if (utility.validateNullCheck(email) && utility.validateNullCheck(password)) {
    try {
      db.user.collection.insertOne(
        { email, password: SHA256(password).words.reduce((t,x)=>t+x).toLocaleString() },
        (err, result) => {
          if (!err) {
            if (result) {
              res.json(
                utility.consoleAndReply(
                  utility.statusCode.DB_CREATE,
                  utility.message.DB_CREATE + "user",
                  result
                )
              );
            } else {
              res.json(
                utility.consoleAndReply(
                  utility.statusCode.DB_CREATE_ERROR,
                  utility.message.DB_CREATE_ERROR + "user"
                )
              );
            }
          } else {
            res.json(
              utility.consoleAndReply(
                utility.statusCode.DB_CREATE_ERROR,
                utility.message.DB_CREATE_ERROR + "user",
                err
              )
            );
          }
        }
      );
    } catch (e) {
      res.json(
        utility.consoleAndReply(
          utility.statusCode.DB_CREATE_ERROR,
          utility.message.DB_CREATE_ERROR + "user",
          e
        )
      );
    }
  } else {
    res.json(
      utility.consoleAndReply(
        utility.statusCode.READ_ERROR,
        utility.message.READ_ERROR + "email and password"
      )
    );
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (utility.validateNullCheck(email) && utility.validateNullCheck(password)) {
    try {
      db.user.findOne({ email, password:SHA256(password).words.reduce((t,x)=>t+x).toLocaleString() }, { password: 0 }, (err, result) => {
        if (!err) {
          if (result) {
            res.json(
              utility.consoleAndReply(
                utility.statusCode.DB_READ,
                utility.message.DB_READ + "user",
                result
              )
            );
          } else {
            res.json(
              utility.consoleAndReply(
                utility.statusCode.DB_READ_ERROR,
                utility.message.DB_READ_ERROR + "user"
              )
            );
          }
        } else {
          res.json(
            utility.consoleAndReply(
              utility.statusCode.DB_READ_ERROR,
              utility.message.DB_READ_ERROR + "user",
              err
            )
          );
        }
      });
    } catch (e) {
      res.json(
        utility.consoleAndReply(
          utility.statusCode.DB_READ_ERROR,
          utility.message.DB_READ_ERROR + "user",
          e
        )
      );
    }
  } else {
    res.json(
      utility.consoleAndReply(
        utility.statusCode.READ_ERROR,
        utility.message.READ_ERROR + "email and password"
      )
    );
  }
});

module.exports = router;
