const rateLimit = require("express-rate-limit");

const registerRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 2,
  message: {
    message: "Too many registration attempts. Please try again in 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = registerRateLimiter;
