const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening`);
}); //the server object listens on port 8080
