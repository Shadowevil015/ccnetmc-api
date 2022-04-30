const express = require("express"),
  router = express.Router(),
  emc = require("ccnetmc")

router.get("/", async (req, res) => {

    var sieges = await emc
      .getSieges()
      .then((sieges) => {
        return sieges;
      })
      .catch(() => {});

    res.status(200).json(sieges);
  
});

module.exports = router;
