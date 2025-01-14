import { Output, Services } from "~templates-utils";
import { Input } from "./meta";

export function generate(input: Input): Output {
  const services: Services = [];

  services.push({
    type: "app",
    data: {
      projectName: input.projectName,
      serviceName: input.appServiceName,
      source: {
        type: "image",
        image: input.appServiceImage,
      },
      proxy: {
        port: 8025,
        secure: true,
      },
      ports: [
        {
          published: 1025,
          target: 1025,
        },
      ],
    },
  });

  return { services };
}
