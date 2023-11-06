import express from "express";

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  console.log("Someone wants to log in");
  res.send("Welcome, please log in.");
});
