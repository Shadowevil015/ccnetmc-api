const express = require("express"),
  router = express.Router(),
  ccmc = require("ccnetmc")
  cache = require("memory-cache");

var cacheTimeout = 20000;

router.get("/", async (req, res) => {
  var cachedSieges = cache.get("sieges");

  if (cachedSieges) res.status(200).json(cachedSieges);
  else {
    var sieges = await ccmc
      .getSieges()
      .then((sieges) => {
        return sieges;
      })
      .catch(() => {});

    res.status(200).json(sieges);
    cache.put("sieges", sieges, cacheTimeout);
  }
});

module.exports = router;