const express = require("express")
const { greetingRouter } = require("./routes/greetings")
const { errorHandler } = require("./middlewares/errorHandling")

const PORT = process.env.PORT || 8080

const app = express()

app.use(greetingRouter)

// register the custom error handling middleware
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
