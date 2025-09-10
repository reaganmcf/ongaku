import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";
import PACKAGE_INFO from "../package.json";

const PORT = 2999;

const app = new Elysia()
  .use(
    openapi({
      scalar: {
        layout: "classic",
      },
      documentation: {
        info: {
          title: PACKAGE_INFO.name,
          version: PACKAGE_INFO.version,
        },
      },
    }),
  )
  .get("/", () => "Hello Elysia")
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
