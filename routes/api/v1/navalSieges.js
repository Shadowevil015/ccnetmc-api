const express = require("express"),
  router = express.Router(),
  ccmc = require("ccnetmc")
  cache = require("memory-cache");

var cacheTimeout = 20000;

router.get("/", async (req, res) => {
  var cachedNavalSieges = cache.get("navalSieges");

  if (cachedNavalSieges) res.status(200).json(cachedNavalSieges);
  else {
    var navalSieges = await ccmc
      .getNavalSieges()
      .then((navalSieges) => {
        return navalSieges;
      })
      .catch(() => {});

    res.status(200).json(navalSieges);
    cache.put("navalSieges", navalSieges, cacheTimeout);
  }
});

module.exports = router;