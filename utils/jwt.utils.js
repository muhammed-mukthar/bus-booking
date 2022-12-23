const jwt=require('jsonwebtoken')

exports.generateAccessToken=(user)=> {
  return jwt.sign({ ...user }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_TIME,
  });
}

exports.verifyJwt=(token)=> {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded) {
      return {
        valid: true,
        expired: false,
        decoded,
      };
    } else {
      return {
        valid: false,
        expired: "invalid accessToken",
        decoded: null,
      };
    }
  } catch (e) {
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}
