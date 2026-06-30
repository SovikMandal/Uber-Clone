import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDB from "./src/DB/db.js";
import userRoutes from "./src/routes/user.routes.js";
import captainRoutes from "./src/routes/captain.routes.js";

const app = express();

dotenv.config();
app.use(cors());
connectToDB();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use('/users', userRoutes);
app.use('/captain', captainRoutes);

export default app;