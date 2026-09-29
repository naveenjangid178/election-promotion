const express = require("express")

const {
  createProblem,
  verifyProblem,
} = require("../controllers/problem.controller")

const router = express.Router()

// Create new problem
router.post(
  "/",
  createProblem
)

// Verify problem status
router.get(
  "/:problemId",
  verifyProblem
)

module.exports = router