import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes/combineRouters";
import corsOptions from "../config/corsOrigins";
import cookieParser from "cookie-parser";
import config from "../config/serverConfig";
import "dotenv/config";
const app = express(); // use express app
const port = config.api.port; // default port to 3000
app.use(cors(corsOptions)); // allowed origin and destination
app.use(cookieParser()); // Use cookie-parser middleware
app.use(express.json()); // Use Json middleware
app.use("/", express.static(path.join(__dirname, "public"))); //assets directory
app.use(routes); //routes combine directory

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default server;
/* import { Request, Response } from "express-serve-static-core" */
