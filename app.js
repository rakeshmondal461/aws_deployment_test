import express from "express";
const app = express();

app.get("/", (req, res) => {
  const clientIP =
    (req.headers["x-forwarded-for"] || "").split(",").pop().trim() ||
    req.socket.remoteAddress;
  console.log("IP>>>", req.ip);
  console.log("clientIP>>>", clientIP, "<<<clientIP");
  return res.status(200).json({ message: "REQUEST SERVED" });
});

app.listen(5003, () => {
  console.log(`Server running on PORT 5003`);
});
