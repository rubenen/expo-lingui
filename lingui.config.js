import { defineConfig } from "@lingui/cli";

export default defineConfig({
    sourceLocale: "en",
    locales: ["da", "en", "de"],
    catalogs: [
        {
            path: "<rootDir>/src/locales/{locale}/messages",
            include: ["src"],
        },
    ],
    format: "po",
    compileNamespace: "es",
});
