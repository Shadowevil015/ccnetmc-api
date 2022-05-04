const express = require("express"),
  router = express.Router(),
  ccmc = require("ccnetmc");

var timeout = 30000;

router.get("/:xPos/:zPos/:xBlocks/:zBlocks", async (req, res) => {
  var xBlocks = Number(req.params.xBlocks);
  var zBlocks = Number(req.params.zBlocks);
  if (!xBlocks) xBlocks = 500;
  if (!zBlocks) zBlocks = 500;

  var nearbyPlayers = await ccmc
    .getNearbyPlayers(
      Number(req.params.xPos),
      Number(req.params.zPos),
      xBlocks,
      zBlocks
    )
    .then((players) => {
      return players;
    })
    .catch(() => {});

  if (!canJSON(nearbyPlayers)) return;
  if (!nearbyPlayers) sendOk(res, []);
  else sendOk(res, nearbyPlayers);
});

function sendOk(res, data) {
  res.status(200).json(data).setTimeout(timeout);
}

function canJSON(value) {
  try {
    JSON.stringify(value);
    return true;
  } catch (ex) {
    return false;
  }
}

module.exports = router;
