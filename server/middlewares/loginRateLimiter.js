const rateLimit = require("express-rate-limit");

const loginRateLimiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 5,
  message: {
    message: "Too many login attempts. Please try again in 2 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = loginRateLimiter;
