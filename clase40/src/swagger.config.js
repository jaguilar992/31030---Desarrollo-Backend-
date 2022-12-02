export const SwaggerOptions = {
  definition: {
    openapi: "3.0.3", // present supported openapi version
    info: {
      title: "Simple Pokemon API", // short title.
      description: "A simple pokemon API", //  desc.
      version: "1.0.1", // version number
      contact: {
        name: "Antonio Aguilar", // your name
        email: "antonio.aguilar@helloiconic.com", // your email
        url: "github.com", // your website
      },
    },
  },
  apis: ["src/docs/**/*.yaml"],
}