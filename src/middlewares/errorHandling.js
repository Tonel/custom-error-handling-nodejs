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
    // hide the detailed error message in production
    // for security reasons
    if (process.env.NODE_ENV !== "production") {
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

  // return the stack trace only when
  // developing locally or in stage
  if (process.env.NODE_ENV !== "production") {
    stackTrace = err.stack
  }

  // logg the error
  console.error(err)
  // other custom behaviors...

  // return the standard error response
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
