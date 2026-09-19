import { Elysia } from "elysia";
import { html, Html } from "@elysia/html";
import { staticPlugin } from "@elysia/static";
import { HomePage } from "./HomePage";

export const pages = new Elysia()
    .use(
        // used for serving index.js, index.css, htmx.min.js
        // docs: https://elysiajs.com/plugins/static.html
        staticPlugin({
            assets: "src/pages/public",
            prefix: "/public",
            maxAge: process.env.NODE_ENV === "production" ? 86400 : 0,
        }),
    )
    // docs: https://elysiajs.com/plugins/html.html
    .use(html())
    .get("/", () => <HomePage />);
