const User = require("../../modules/db/schemas/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const header = req.headers.authorization; // get the header
  const token = header.split(/\s+/).pop(); // and the encoded auth token
  const auth = new Buffer.from(token, "base64").toString(); // convert from base64
  const parts = auth.split(/:/); // split on colon
  const authorization = { username: parts[0], password: parts[1] };

  const sendError = () => {
    res.writeHead(406, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "user not found",
      })
    );
  };

  const sendErrorConfirm = () => {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        success: false,
        message: "You don't confirm email!",
      })
    );
  };

  const sendResponse = (token) => {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        message: "Enjoy your token!",
        token: token,
      })
    );
  };

  const generateToken = (params) => {
    const secretKey = req.app.settings.superSecret;
    return jwt.sign(params, secretKey, {
      expiresIn: 60 * 60 * 24,
    });
  };

  const onFind = (err, findUser) => {
    const user = findUser[0];
    if (err) throw err;
    if (user.confirmEmail === false) {
      sendErrorConfirm();
    } else {
      const password = user.password;
      const id = user._id;
      const correctPassword = bcryptjs.compareSync(
        authorization.password,
        password
      );
      if (!user || !correctPassword) {
        sendError();
        return;
      }
      const payload = {
        password,
        id,
      };

      const token = generateToken(payload);
      // console.log(token);
      sendResponse(token);
    }
  };
  if (authorization.username.includes("@")) {
    User.find({ email: authorization.username }, onFind);
  } else {
    User.find({ username: authorization.username }, onFind);
  }
};
module.exports = login;
