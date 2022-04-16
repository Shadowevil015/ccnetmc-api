const http = require("http")
const https = require("https"),
      app = require("./app")

const privatekey = fs.readFileSync('/etc/letsencrypt/live/shadowevil015.tech/privkey.pem', 'uft8')
const certificate = fs.readFileSync('/etc/letsencrypt/live/shadowevil015.tech/cert.pem', 'uft8')
const ca = fs.readFileSync('/etc/letsencrypt/live/shadowevil015.tech/chain.pem', 'uft8')

const credentials = {
    key: privatekey,
    cert: certificate,
    ca: ca
};

const httpsServer = https.createServer(credentials, app)
httpsServer.listen(process.env.PORT || 80) 