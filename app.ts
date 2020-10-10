import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.get("/", function (req: any, res: any) {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log("listening on " + port);
});
