import jwt from 'jsonwebtoken';

// Default middleware (used in most routes)
const authMiddleware = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ success: false, message: "Not Authorized. Login Again" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };  // ✅ Always attach to `req.user.id`
    next();
  } catch (error) {
    console.error("AuthMiddleware error:", error);
    res.status(403).json({ success: false, message: "Invalid or expired token" });
  }
};

// Optional named export if you need another middleware
export const requireAuth = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ success: false, message: "Auth token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id };  // ✅ Same structure
    next();
  } catch (err) {
    console.error("RequireAuth error:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
