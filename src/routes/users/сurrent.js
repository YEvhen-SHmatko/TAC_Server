const User = require("../../modules/db/schemas/user");
const getToken = require("../../modules/getToken");
const jwt = require("jsonwebtoken");
const current = (req, res) => {
  const token = getToken(req);
  const id = jwt.decode(token).id;
  const sendResponse = (user) => {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        user: user,
      })
    );
  };
  const sendError = () => {
    res.writeHead(406, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "user not found",
      })
    );
  };
  User.findById({ _id: id }, null, { new: true })
    .then(sendResponse)
    .catch(sendError);
};
module.exports = current;
