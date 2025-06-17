const rateLimit = require("express-rate-limit");

const registerRateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 3,
  message: {
    message: "Too many registration attempts. Please try again in 10 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = registerRateLimiter;
