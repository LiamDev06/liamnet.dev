import { DefaultHttpApiBridge } from "conjure-client";

import { config } from "@/config";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bridge = new DefaultHttpApiBridge({
  baseUrl: config.apiBaseUrl,
  userAgent: {
    productName: "liamnet-app",
    productVersion: "0.0.1",
  },
});

export const api = {
  // TODO: Setup first service
};
