const express = require("express"),
      router = express.Router(),
      emc = require("ccnetmc")

router.get("/:xPos/:zPos/:xBlocks/:zBlocks", async (req, res) => 
{
    var xBlocks = req.params.xBlocks
    var zBlocks = req.params.zBlocks
    if (!xBlocks) xBlocks = 500
    if (!zBlocks) zBlocks = 500

    var nearbyPlayers = await emc.getNearbyPlayers(Number(req.params.xPos), Number(req.params.zPos), Number(xBlocks), Number(zBlocks)).then(players => { return players })
    
    if (!nearbyPlayers) res.status(200).json([])
    else res.status(200).json(nearbyPlayers)
})

module.exports = router
