import { Router } from "express";
import { Card } from "../models/Card";
import { CardSchema } from "../ZodSchemas/CardSchema";
import { error } from "console";


const routes = Router();


routes.get("/", (_, res) => {
    return res.send("Hello Express")
})

routes.post("/post", (req , res) => {
    
    const result = CardSchema.safeParse(req.body);

    if(!result.success){
        return res.status(400).json({error: result.error.issues})
    }
    const CardData: Card = result.data;
    
    return res.json({message: `Card inserido`, CardData})

});



export {routes}