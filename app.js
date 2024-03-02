import express from "express";
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ message: "REQUEST SERVED" });
});

app.listen(5003, () => {
  console.log(`Server running on PORT 5003`);
});
