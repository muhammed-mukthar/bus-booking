const { get } =require("lodash") ;
const { verifyJwt } = require("../utils/jwt.utils");
exports.VerifyUser = async (req, res, next) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );
  if (!accessToken) {
    res.status(403).json("you are not allowed to do it");
  } else {
    const { decoded, expired } = verifyJwt(accessToken, "accessTokenSecret");
    if (decoded) {
      req.user = decoded;
      return next();
    } else if (expired) {
      res.status(403).json("token not valid");
    }
  }
};
