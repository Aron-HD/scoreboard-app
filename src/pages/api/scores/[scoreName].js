export default (req, res) => {
  const httpMethod = req.method;

  const placeholder = { name: "home", score: 0 };

  switch (httpMethod) {
    case "GET":
      res.status(200).json(placeholder);
      break;
    case "PATCH":
      const payload = { name: "home", score: 1 };
      res.status(200).json(payload);
    default:
      break;
  }
  res.status(200);
};
