const { Router } = require("express")
const { GreetingController } = require("../controllers/greetings")

const greetingRouter = Router()

greetingRouter.get("/api/v1/greetings/sayHi", GreetingController.sayHi)

module.exports = {
  greetingRouter,
}
