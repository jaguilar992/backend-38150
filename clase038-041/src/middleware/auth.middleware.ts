export const authMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization;
  const token = authorization?.split(" ")[1];
  // Bearer 123456
  if (!token) {
    return res.status(401).json({ message: "Unauthorized", data: null });
  }
  if (token === "123456") {
    req.token = token;
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized", data: null });
  }
}