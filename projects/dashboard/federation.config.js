const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: "dashboard",

  exposes: {
    // "./Component": "./projects/dashboard/src/app/app.component.ts",
    "./Routes": "./projects/dashboard/src/app/app.routes.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",
    // Add further packages you don't need at runtime
    "chart.js",
    "chart.js/auto",
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
