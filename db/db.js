const mongoose = require("mongoose");
const utility = require("../utility");

const password = "root123";

mongoose.connect(
  `mongodb+srv://root:${password}@cluster0.fuz20.mongodb.net/Regionalingo?retryWrites=true&w=majority`
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, utility.message.DB_CONNECTED_ERROR));
db.once("open", function () {
  console.log(utility.message.DB_CONNECTED);
});

const user = mongoose.model(
  "User",
  new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  })
);

const contact = mongoose.model(
  "contact",
  new mongoose.Schema({
    email: { type: String, required: true },
    comment: { type: String },
  })
);

module.exports = {
  user,
  contact,
};
