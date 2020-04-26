const logout = (req, res) => {
  res.end(
    JSON.stringify({
      status: "logout",
    })
  );
};
module.exports = logout;
