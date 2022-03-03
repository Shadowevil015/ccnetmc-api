const express = require("express"),
      router = express.Router(),
      emc = require("ccnetmc")

router.get("/", async (req, res) => 
{
    var onlinePlayers = await emc.getOnlinePlayers(true).then(players => { return players })

    res.status(200).json(onlinePlayers)
})

router.get("/:onlinePlayer", async (req, res) => 
{
    var onlinePlayer = await emc.getOnlinePlayer(req.params.onlinePlayer).then(player => { return player })

    if (onlinePlayer.name == "INVALID_PLAYER") res.status(404).json(onlinePlayer.message)
    else res.status(200).json(onlinePlayer)
})

module.exports = router
