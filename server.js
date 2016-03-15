var path = require("path"),
		fs = require('fs'),
		bodyParser = require('body-parser'),
		express = require('express'),
		app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Serve the static assets
app.use("/build", express.static(path.join(__dirname, "build")))
app.use(express.static(path.join(__dirname, "public"), {
	maxAge: '1d'
}))

// Get HTML and replace SCRIPT_URL with Webpack build based on environment
var html = fs.readFileSync(path.resolve(__dirname, "./src/index.html"), "utf-8"),
		buildPath = "/build",
		scriptUrl = process.env.node_env ? buildPath : "http://localhost:8080"+buildPath,//"http://10.161.252.30:8080/build",
		html = html.replace("SCRIPT_URL", `${scriptUrl}/bundle.js`)

// Serve index.html for root
app.get("/*", function(req, res) { 
	res.contentType = "text/html; charset=utf8";
	res.setHeader('cache-control', 'max-age=0, private, must-revalidate'); // new header
	res.end(html)
})

// Set port env settings or defaults to 3000
app.set("port", (process.env.PORT || 3000));

app.listen(app.get("port"), function(){
 	console.log("App listening on port %s", app.get("port"))
 	console.log('Running on', process.env.node_env ? "production" : "development")
})
