const router = require("express").Router();
const {translate} = require("@vitalets/google-translate-api");

router.post("/translate", async (req, res) => {
  try {
    const text = req.body.text;
    const from = req.body.from;
    const to = req.body.to;
    console.log(req.body);
    translate(text, { from, to }).then(response=>{
        console.log(response);
        res.json(response.text);
    }).catch(err=>{
        console.log(err);
        res.json("no translation")
    });
  } catch (err) {
    console.log(err);
    res.json("Unable to translate");
  }
});

module.exports = router;
