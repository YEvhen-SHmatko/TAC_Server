const email = require("emailjs/email");
const config = require("../configs/config");
const account = config.smtp;
const sendEmail = (user) => {
  const server = email.server.connect(account);
  const message = {
    from: account.user,
    to: `${user.username}<${user.email}>`,
    subject: "Registration from Time Analytic Control",
    text: "",
    attachment: [
      {
        data: `
            <div>
                <h1>Email Confirmation</h1>
                <p>
                    Hi, ${user.username}, you are almost ready to start use Time Analytic Control.
                    Simply click link below to verify your email address.
                </p>
                <a
                    href="${config.URL}${config.routes.confirm}/${user["_id"]}"
                    target="_blank"
                    >Verify email address</a
                >
            </div>`,
        alternative: true,
      },
    ],
  };
  // send the message and get a callback with an error or details of the message that was sent
  server.send(message, (err, message) => {
    if (err) console.log(err);
    // if (message) console.log(message);
  });
};
module.exports = sendEmail;
