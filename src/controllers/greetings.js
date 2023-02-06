const { CustomHttpError } = require("../errors/CustomError")

const GreetingController = {
  sayHi: async (req, res, next) => {
    try {
      // reading the "name" query parameter
      let name = req.query.name

      if (name) {
        res.json(`Hello, ${name}!`)
      } else {
        // initializing a 400 error to send to the
        // error handling layer
        throw new CustomHttpError(400, `Required query parameter "name" is missing!`)
      }
    } catch (e) {
      // catching any error and send it
      // to the error handling middleware
      return next(e)
    }
  },
}

module.exports = {
  GreetingController,
}
