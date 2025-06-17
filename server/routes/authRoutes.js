const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
// validator
const validate = require("../middlewares/validate");

// auth validators
const { registerSchema, loginSchema } = require("../validators/authValidators");

// rate limiters
const loginRateLimiter = require("../middlewares/loginRateLimiter");
const registerRateLimiter = require("../middlewares/registerRateLimiter");

router.post(
  "/register",
  registerRateLimiter,
  validate(registerSchema),
  register
);

router.post("/login", loginRateLimiter, validate(loginSchema), login);

router.get("/", (req, res) => {
  res.send("This is the auth ");
});

module.exports = router;
