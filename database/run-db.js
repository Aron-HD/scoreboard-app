import { sql, Database } from "@leafac/sqlite";

const database = new Database("database/database.db");

// create table

database.execute(
  sql`
  CREATE TABLE IF NOT EXISTS "scores" (
      "id" INTEGER PRIMARY KEY AUTOINCREMENT,
      "name" TEXT UNIQUE,
      "score" INTEGER NOT NULL
      );
  `
);

try {
  database.run(
    sql`INSERT INTO "scores" ("name", "score") VALUES (${"home"}, ${0})`
  );
  database.run(
    sql`INSERT INTO "scores" ("name", "score") VALUES (${"away"}, ${0})`
  );
} catch (error) {
  //   console.debug(error);
}

export default database;
