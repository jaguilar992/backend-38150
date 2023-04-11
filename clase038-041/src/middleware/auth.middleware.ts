export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
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