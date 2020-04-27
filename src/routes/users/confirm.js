const User = require("../../modules/db/schemas/user");
const confirm = (req, res) => {
  const id = req.params.id;
  const sendError = () => {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "error",
        confirm: false,
      })
    );
  };
  const sendResponse = (newUser) => {
    if (!newUser) {
      return sendError();
    }
    res.writeHead(201, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        confirm: newUser.confirmEmail,
      })
    );
  };

  User.findByIdAndUpdate({ _id: id }, { confirmEmail: true }, { new: true })
    .then(sendResponse)
    .catch(sendError);
};
module.exports = confirm;
