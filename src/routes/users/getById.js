const User = require("../../modules/db/schemas/user");

const getUserById = (req, res) => {
  const id = req.params.id;

  const sendResponse = (user) => {
    res.writeHead(201, { "Content-type": "application/json" });
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
module.exports = getUserById;
