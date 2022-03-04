const express = require("express")
      app = express(),
      mainRoute = require("./routes/main"),
      townsRoute = require("./routes/api/v1/towns"),
      nationsRoute = require("./routes/api/v1/nations"),
      residentsRoute = require("./routes/api/v1/residents"),
      serverInfoRoute = require("./routes/api/v1/serverInfo"),
      onlinePlayersRoute = require("./routes/api/v1/onlinePlayers"),
      townlessPlayersRoute = require("./routes/api/v1/townlessPlayers"),
      allPlayersRoute = require("./routes/api/v1/allPlayers"),
      nearbyPlayersRoute = require("./routes/api/v1/nearbyPlayers"),
      nearbyTownsRoute = require("./routes/api/v1/nearbyTowns"),
      nearbyNationsRoute = require("./routes/api/v1/nearbyNations"),
      onlineRedirect = require("./routes/api/v1/redirects/online"),
      playersRedirect = require("./routes/api/v1/redirects/players"),
      townlessRedirect = require("./routes/api/v1/redirects/townless")

app.use(express.json())

// Use index and auth routes.
app.use("/", mainRoute)

// Use the routes defined in api/routes
app.use("/api/v1/towns", townsRoute)
app.use("/api/v1/nations", nationsRoute)
app.use("/api/v1/residents", residentsRoute)
app.use("/api/v1/serverinfo", serverInfoRoute)
app.use("/api/v1/onlineplayers", onlinePlayersRoute)
app.use("/api/v1/townlessplayers", townlessPlayersRoute)
app.use("/api/v1/allplayers", allPlayersRoute)
app.use("/api/v1/nearby", nearbyPlayersRoute)
app.use("/api/v1/nearbyplayers", nearbyPlayersRoute)
app.use("/api/v1/nearbytowns", nearbyTownsRoute)
app.use("/api/v1/nearbynations", nearbyNationsRoute)

// Redirects
app.use("/api/v1/online", onlineRedirect)
app.use("/api/v1/players", playersRedirect)
app.use("/api/v1/townless", townlessRedirect)


// Default not found response
app.use((req, res) => 
{
      var date = new Date()

      res.json({
            "timestamp": date.getTime(),
            "status": 404,
            "error": "Endpoint Error",
            "message": "Not found!",
            "path": req.path
      })
})

// Error handling
app.use((error, req, res) => 
{
      var date = new Date()

      res.json({
            "timestamp": date.getTime(),
            "status": error.status || 500,
            "error": "Internal Server Error",
            "message": error.message,
            "path": req.path
      })
})

module.exports = app
