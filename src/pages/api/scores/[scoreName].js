import { sql } from "@leafac/sqlite";
import database from "../../../../database/run-db.js";

export default (req, res) => {
  const httpMethod = req.method;
  const { scoreName } = req.query;

  switch (httpMethod) {
    case "GET":
      const score = database.get(
        sql`SELECT * FROM "scores" WHERE "name" = ${scoreName}`
      );
      console.log(scoreName);
      console.log(score);
      if (score) {
        res.status(200).json(score);
      } else {
        res
          .status(404)
          .json({ message: `endpoint (${scoreName}) score not found` });
      }
      break;
    case "PATCH":
      const payload = { name: "home", score: 1 };
      res.status(200).json(payload);
      break;
    default:
      res.setHeader("Allow", ["GET", "PATCH"]);
      res.status(405).end(`${httpMethod} method not allowed.`);
  }
  res.status(200);
};
