/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "beavr",
      // we have 2 stages staging and for future production
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          profile: "my-organization",
          region: "eu-west-3",
        }
      }
    };
  },
  async run() {
    const DATABASE_URL = new sst.Secret("DATABASE_URL");
    const BETTER_AUTH_SECRET = new sst.Secret("BETTER_AUTH_SECRET");
    const GOOGLE_CLIENT_ID = new sst.Secret("GOOGLE_CLIENT_ID");
    const GOOGLE_CLIENT_SECRET = new sst.Secret("GOOGLE_CLIENT_SECRET");
    const POLAR_ACCESS_TOKEN = new sst.Secret("POLAR_ACCESS_TOKEN");
    const POLAR_WEBHOOK_SECRET = new sst.Secret("POLAR_WEBHOOK_SECRET");
    const UPSTASH_REDIS_REST_URL = new sst.Secret("UPSTASH_REDIS_REST_URL");
    const UPSTASH_REDIS_REST_TOKEN = new sst.Secret("UPSTASH_REDIS_REST_TOKEN");

    const secrets = [
      BETTER_AUTH_SECRET,
      DATABASE_URL,
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      POLAR_ACCESS_TOKEN,
      POLAR_WEBHOOK_SECRET,
      UPSTASH_REDIS_REST_URL,
      UPSTASH_REDIS_REST_TOKEN,
    ];

    new sst.aws.Nextjs("Beavr", {
      link: secrets,
      environment: {
        BETTER_AUTH_SECRET: BETTER_AUTH_SECRET.value,
        GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID.value,
        GOOGLE_CLIENT_SECRET: GOOGLE_CLIENT_SECRET.value,
        DATABASE_URL: DATABASE_URL.value,
        POLAR_ACCESS_TOKEN: POLAR_ACCESS_TOKEN.value,
        POLAR_WEBHOOK_SECRET: POLAR_WEBHOOK_SECRET.value,
        UPSTASH_REDIS_REST_URL: UPSTASH_REDIS_REST_URL.value,
        UPSTASH_REDIS_REST_TOKEN: UPSTASH_REDIS_REST_TOKEN.value,
      },
    });
  },
});
