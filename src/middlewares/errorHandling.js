const { CustomHttpError } = require("../errors/CustomError")

function errorHandler(err, req, res, next) {
  // default HTTP status code and error message
  let httpStatusCode = 500
  let message = "Internal Server Error"

  // if the error is a custom defined error
  if (err instanceof CustomHttpError) {
    httpStatusCode = err.httpStatusCode
    message = err.message
  } else {
    // hiding the detailed error message in production
    // for security reasons
    // (assuming that in production there is an env
    //  called ENV that contains the string "production")
    if (process.env.ENV !== "production") {
      // since in JavaScript you can also
      // directly throw strings
      if (typeof err === "string") {
        message = err
      } else if (err instanceof Error) {
        message = err.message
      }
    }
  }

  let stackTrace = undefined

  // returning the stack trace only when
  // developing locally or in stage
  if (process.env.ENV !== "production") {
    stackTrace = err.stack
  }

  // logging the error
  console.error(err)
  // other custom behaviors...

  // returning the standard error response
  res.status(httpStatusCode).send({
    error: {
      message: message,
      timestamp: err.timestamp || undefined,
      documentationUrl: err.documentationUrl || undefined,
      stackTrace: stackTrace,
    },
  })

  return next(err)
}

module.exports = {
  errorHandler,
}
