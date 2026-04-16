import { DefaultHttpApiBridge } from "conjure-client";
import { UserService } from "@liamnet/liamnet-api";
import { config } from "@/config";

const bridge = new DefaultHttpApiBridge({
  baseUrl: config.apiBaseUrl,
  userAgent: {
    productName: "liamnet-app",
    productVersion: "0.0.1",
  },
});

const userService = new UserService(bridge);

export const api = {
  userService,
};
