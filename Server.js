import express from "express";
const app = express();
import cors from "cors";
app.use(cors());

app.use(express.json());

import db from "./database/mongoConfig.js";
db.connect();

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

import routes from "./routes/CsvRoutes.js";

app.use(routes);
export default app;
