const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/authorizeRoles");
const { changeUserRole } = require("../controllers/adminController");

router.put(
  "/change-role",
  authMiddleware,
  authorizeRoles("admin"),
  changeUserRole
);

module.exports = router;
