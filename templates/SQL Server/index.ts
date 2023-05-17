import { Output, Services } from "~templates-utils";
import { Input } from "./meta";

export function generate(input: Input): Output {
  const services: Services = [];

  services.push({
    type: "app",
    data: {
      env: [
        `ACCEPT_EULA=Y`,
        `MSSQL_SA_PASSWORD=${input.MSSQL_SA_PASSWORD}`,
        `MSSQL_PID=${input.MSSQL_PID}`,
      ].join("\n"),
      source: {
        type: "image",
        image: input.appServiceImage,
      },
      proxy: {
        port: 1433,
        secure: true,
      },
    },
  });

  return { services };
}
