const fs = require('fs');
const http = require("http")
const https = require("https"),
      app = require("./app")

const privatekey = fs.readFileSync('/etc/letsencrypt/live/shadowevil015.tech/privkey.pem', 'utf8')
const certificate = fs.readFileSync('/etc/letsencrypt/live/shadowevil015.tech/cert.pem', 'utf8')
const ca = fs.readFileSync('/etc/letsencrypt/live/shadowevil015.tech/chain.pem', 'utf8')

const credentials = {
    key: privatekey,
    cert: certificate,
    ca: ca
};

const httpsServer = https.createServer(credentials, app)
httpsServer.listen(process.env.PORT || 443) 

const httpServer = http.createServer(app)
httpServer.listen(process.env.PORT || 80)