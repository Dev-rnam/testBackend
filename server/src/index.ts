import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
import {
  CreateService,
  deleteService,
  getServiceController,
  getServiceControllerById,
} from "./controllers/controllerService";

config();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(cookieParser());
app.use(express.json);
const server = http.createServer(app);

app.get("/service", getServiceController);
app.post("/service", CreateService);
app.get("/service:id", getServiceControllerById);
app.delete("/service:id", deleteService);

const MONGO_URL =
  "mongodb+srv://njoyamalik:8NSgNLevdseptMmI@cluster0.x1dzdiw.mongodb.net/mentalilst?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL).then(() => {
  server.listen(5000, () => {
    console.log("server is running to http://localhost:5000");
  });
});
mongoose.connection.on("error", (error: Error) => console.log(error));
