const express = require("express")
const cors = require("cors")

const problemRoutes = require("./routes/problem.routes")

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
  })
)

app.use(express.json())

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Jan Samasya API is running",
  })
})

app.use(
  "/api/problems",
  problemRoutes
)

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  })
})

module.exports = app