const express = require("express"),
  router = express.Router(),
  ccmc = require("ccnetmc");

router.get("/", async (req, res) => {
  var onlinePlayers = await ccmc
    .getOnlinePlayers(true)
    .then((players) => {
      return players;
    })
    .catch(() => {});

  res.status(200).json(onlinePlayers).setTimeout(5000);
});

router.get("/:onlinePlayer", async (req, res) => {
  var onlinePlayer = await ccmc
    .getOnlinePlayer(req.params.onlinePlayer)
    .then((player) => {
      return player;
    })
    .catch(() => {});

  if (onlinePlayer.name == "INVALID_PLAYER")
    res.status(404).json(onlinePlayer.message);
  else res.status(200).json(onlinePlayer).setTimeout(5000);
});

module.exports = router;
