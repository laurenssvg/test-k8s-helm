const express = require("express");
const app = express();
const port = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send("Hello from Kubernetes + Helm + Argo CD!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
