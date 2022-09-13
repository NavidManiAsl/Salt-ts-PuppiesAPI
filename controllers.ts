import { Puppie } from "./models"

export const getAll = async()=>{
    const puppies = await Puppie.find()
    return puppies
}