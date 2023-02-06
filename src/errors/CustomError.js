class CustomError extends Error {
  httpStatusCode
  timestamp
  documentationUrl
  constructor(httpStatusCode, message, documentationUrl) {
    if (message) {
      super(message)
    } else {
      super("A generic error occurred!")
    }

    // initializ the class properties
    this.httpStatusCode = httpStatusCode
    this.timestamp = new Date().toISOString()
    this.documentationUrl = documentationUrl

    // attach a call stack to the current class,
    // preventing the constructor call to appear in the stack trace
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = {
  CustomHttpError: CustomError,
}
