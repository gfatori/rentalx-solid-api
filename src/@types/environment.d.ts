declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface ProcessEnv {
      AWS_ACCESS_KEY_ID: string;
      NODE_ENV: "development" | "production";
      AWS_ACCESS_KEY_ID: string;
      AWS_BUCKET: string;
      AWS_BUCKET_REGION: string;
      disk: string;
    }
  }
}

export {};
