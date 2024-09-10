import { Router } from "express";
import { Card } from "../models/Card";


const routes = Router();


routes.get("/", (_, res) => {
    return res.send("Hello Express")
})

routes.post("/post", (req , res) => {
    const card = req.body;

    return res.send(card);
});



export {routes}