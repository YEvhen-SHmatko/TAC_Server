const bcryptjs = require("bcryptjs");
const User = require("../../modules/db/schemas/user");
const sendEmail = require("../../modules/sendEmail");
const register = (req, res) => {
  const body = req.body;
  const user = { ...body, password: bcryptjs.hashSync(body.password, 10) };
  const newUser = new User(user);

  const sendResponse = (user) => {
    sendEmail(user);
    res.writeHead(201, { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        status: "success",
        user: user,
      })
    );
  };

  const sendError = (error) => {
    const message = { status: "user was not saved" };
    if (!!error.keyValue.email) message.error = "dublicate email";
    if (!!error.keyValue.username) message.error = "dublicate user name";
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(message));
  };

  newUser.save().then(sendResponse).catch(sendError);
};
module.exports = register;
