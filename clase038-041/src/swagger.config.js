export const SwaggerOptions = {
  definition: {
    openapi: "3.0.3", // present supported openapi version
    info: {
      title: "Simple Pokemon API", // short title.
      description: "A simple pokemon API, for the nodejs backend class", //  desc.
      version: "1.0.1", // version number
      produces: ["application/json", "application/xml"],
      securityDefinitions: {
        JWT: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
          description: "Bearer token for security",
        }
      },
      basedir: __dirname, // app absolute path
      files: ["./routes/**/*.js"], // Path to the API handle folder
      contact: {
        name: "Antonio Aguilar", // your name
        email: "jaguilar992@gmail.com", // your email
        url: "github.com", // your website
      },
    },
  },
  apis: ["src/docs/**/*.yaml"],
}