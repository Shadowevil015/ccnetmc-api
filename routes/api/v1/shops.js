const express = require("express"),
  router = express.Router(),
  emc = require("ccnetmc")
  cache = require("memory-cache");

var cacheTimeout = 20000;

router.get("/", async (req, res) => {
  var cachedShops = cache.get("shops");

  if (cachedShops) res.status(200).json(cachedShops);
  else {
    var shops = await emc
      .getShops()
      .then((shops) => {
        return shops;
      })
      .catch(() => {});

    res.status(200).json(shops);
    cache.put("shops", shops, cacheTimeout);
  }
});

module.exports = router;
