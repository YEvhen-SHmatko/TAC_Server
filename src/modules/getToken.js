// POST { token: <token>}
// GET ?token=<token>
// header { x-access-token: <token> }
const getToken = (req) =>
  req.body.token || req.query.token || req.headers["x-access-token"];

module.exports = getToken;
