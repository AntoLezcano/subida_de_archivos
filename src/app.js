import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PORT } from "./config/config.js";
const app = express();

//? Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//? Routes



//?Settings
app.set("port", PORT);


app.listen(app.get("port"), () => {
    console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});

