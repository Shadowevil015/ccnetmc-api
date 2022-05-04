const express = require("express"),
  router = express.Router(),
  ccmc = require("ccnetmc");

router.get("/", async (req, res) => {
  var serverInfo = await ccmc
    .getServerInfo()
    .then((info) => {
      return info;
    })
    .catch(() => {});

  if (!serverInfo) return;
  res.status(200).json(serverInfo);
});

module.exports = router;
