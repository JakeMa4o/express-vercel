import express from "express";


const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to express hosted on vercel")
})

app.get("/po", (req, res) => {
  res.send("Po?")
})

app.listen(3000 || process.env.PORT, () => {
  console.log("Server is listenning on port 3000")
})


export default app;