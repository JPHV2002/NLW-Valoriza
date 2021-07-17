import {Request, Response} from "express"
import { CreateTagsServices } from "../services/CreateTagsServices"

class CreateTagController{
    async handle(request: Request, response: Response){
        const {name} = request.body;

        const createUserServices = new CreateTagsServices();

        const tag = await createUserServices.execute({name});

        return response.json(tag);
    }
}

export {CreateTagController}