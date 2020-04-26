const errorHandler = (req, res, next) => {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    res.status(404).send({ error: "Route not exists" });
  }
};
module.exports = errorHandler;
