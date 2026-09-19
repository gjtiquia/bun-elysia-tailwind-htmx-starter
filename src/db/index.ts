import "dotenv/config";
import { fileURLToPath } from "node:url";
import { push } from "drizzle-kit/cli";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { runBackfillsAsync } from "./backfill";

export const dbFilename = process.env.DB_FILE_NAME;
if (!dbFilename) {
    throw new Error("DB_FILE_NAME must be set.");
}

const dbExists = await Bun.file(dbFilename).exists();
if (!dbExists) {
    throw new Error(`${dbFilename} does not exist! \nhint: bun run db:push`);
}

const { stdout, stderr, exitCode } = await Bun.$`bun run db:validate`.nothrow().quiet();
if (exitCode !== 0) {
    throw new Error(`db:validate non-zero exit code ${exitCode}! \nhint: bun run db:push \nstdout: \n${stdout} \nstderr: \n${stderr}`);
}
if (!stdout.includes("No changes detected")) {
    throw new Error("db schema is out of sync! \nhint: bun run db:push");
}

export const db = drizzle(dbFilename);
db.$client.exec("PRAGMA foreign_keys = ON");

await runBackfillsAsync(db);

export * from "./schema";
