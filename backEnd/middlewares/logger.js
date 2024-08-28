const logger = () => {
  return (req, res, next) => {
    console.log(`${req.method}: ${req.originalUrl}`); // originalUrl ni (/users)
    next();
  };
};
module.exports = { logger };
