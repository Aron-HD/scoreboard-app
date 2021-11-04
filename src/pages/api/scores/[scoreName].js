import { sql } from "@leafac/sqlite";
import database from "../../../../database/run-db.js";

export default (req, res) => {
  const httpMethod = req.method;
  const { scoreName } = req.query;
  const { name, score } = req.body;

  switch (httpMethod) {
    case "GET":
      const dbScore = database.get(
        sql`SELECT * FROM "scores" WHERE "name" = ${scoreName}`
      );
      if (dbScore) {
        res.status(200).json(dbScore);
      } else {
        res
          .status(404)
          .json({ message: `endpoint (${scoreName}) score not found` });
      }
      break;
    case "PATCH":
      const oldDbScore = database.get(
        sql`SELECT * FROM "scores" WHERE "name" = ${scoreName}`
      );
      if (oldDbScore) {
        const payload = {
          name: name,
          score: score,
        };

        database.run(
          sql`UPDATE "scores" SET "score" = ${score} WHERE "name" = ${scoreName}`
        );
        res.status(200).json(payload);
        console.log(oldDbScore);
      } else {
        res
          .status(404)
          .json({ message: `endpoint (${scoreName}) score not found` });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PATCH"]);
      res.status(405).end(`${httpMethod} method not allowed.`);
  }
  res.status(200);
};
