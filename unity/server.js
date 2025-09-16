// server.js
const httpServer = require("http-server");

const server = httpServer.createServer({
  root: "./Build",        // Path to your Unity WebGL build folder
  brotli: true,           // Enable Brotli
  gzip: true,             // Enable Gzip fallback
  cache: -1,              // Disable caching for dev
});

const port = 8080;

server.listen(port, () => {
  console.log(`🚀 Unity WebGL running at http://localhost:${port}`);
});
