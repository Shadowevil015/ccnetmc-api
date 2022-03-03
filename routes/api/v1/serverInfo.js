const express = require("express"),
      router = express.Router(),
      emc = require("ccnetmc")

router.get("/", async (req, res) => 
{
    var serverInfo = await emc.getServerInfo().then(info => { return info })

    res.status(200).json(serverInfo)
})

module.exports = router
