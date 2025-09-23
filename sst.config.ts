/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "zinpage",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const BETTER_AUTH_SECRET = new sst.Secret("BETTER_AUTH_SECRET");
    const DATABASE_URL = new sst.Secret("DATABASE_URL");
    const GOOGLE_CLIENT_ID = new sst.Secret("GOOGLE_CLIENT_ID");
    const GOOGLE_CLIENT_SECRET = new sst.Secret("GOOGLE_CLIENT_SECRET");

    const secrets = [
      BETTER_AUTH_SECRET,
      DATABASE_URL,
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
    ];

    new sst.aws.Nextjs("ZinPage", {
      link: secrets,
      environment: {
        BETTER_AUTH_SECRET: BETTER_AUTH_SECRET.value,
        GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID.value,
        GOOGLE_CLIENT_SECRET: GOOGLE_CLIENT_SECRET.value,
        DATABASE_URL: DATABASE_URL.value,
      },
    });
  },
});
