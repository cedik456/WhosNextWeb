const rateLimit = require("express-rate-limit");

const loginRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 2,
  message: {
    message: "Too many login attempts. Please try again in 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = loginRateLimiter;
