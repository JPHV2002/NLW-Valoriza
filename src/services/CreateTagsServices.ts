import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories"

interface ITagsRequest{
    name: string;
}

class CreateTagsServices{

    async execute({name} : ITagsRequest){
        const tagsRepositories = getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error ("Name Incorrect"); 
        }

        const tagAlredyExists = await tagsRepositories.findOne({name});
        if(tagAlredyExists){
            throw new Error ("Tag Already Exist");
        }

        const tag = tagsRepositories.create({name});
        await tagsRepositories.save(tag);
        return tag;
    }
}

export { CreateTagsServices }