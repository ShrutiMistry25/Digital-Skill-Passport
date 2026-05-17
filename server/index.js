const express = require("express");
const path = require("path");

const app = express();
const portsToTry = [process.env.PORT || 4000, 4001, 4002].map(Number);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running");
});

function startServer(index = 0) {
  if (index >= portsToTry.length) {
    console.error(`No available ports found among: ${portsToTry.join(", ")}`);
    process.exit(1);
  }

  const port = portsToTry[index];
  const server = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      console.warn(`Port ${port} is in use. Trying next port...`);
      startServer(index + 1);
    } else {
      console.error(error);
      process.exit(1);
    }
  });
}

startServer();
