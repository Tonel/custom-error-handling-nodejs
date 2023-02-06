const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: "My Error Handling Demo App",
  pushApiKey: "<YOUR_APP_SIGNAL_KEY>",
});
