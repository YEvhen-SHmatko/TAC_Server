const bcryptjs = require("bcryptjs");
const User = require("../../modules/db/schemas/user");

const editUser = (req, res) => {
  const user = req.body;
  const id = req.params.id;
  if (user.password) {
    user.password = bcryptjs.hashSync(user.password, 10);
  }
  const sendError = () => {
    res.writeHead(400, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "error",
        text: "there is no such user",
      })
    );
  };

  const sendResponse = (newUser) => {
    if (!newUser) {
      return sendError();
    }

    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        user: newUser,
      })
    );
  };

  User.findByIdAndUpdate({ _id: id }, { ...user }, { new: true })
    .then(sendResponse)
    .catch(sendError);
};
module.exports = editUser;
