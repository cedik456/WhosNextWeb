const User = require("../models/UserSchema");

exports.changeUserRole = async (req, res) => {
  try {
    const { userId, newRole } = req.body;

    const validRoles = ["admin", "recruiter", "jobSeeker"];

    if (!validRoles.includes(newRole)) {
      return res.status(400).json({ success: false, message: "Invalid role" });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      { role: newRole },
      { new: true }
    );

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      message: `User role updated to ${newRole}`,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        newRole: user.role,
      },
    });
  } catch (error) {
    console.error("Change role error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
