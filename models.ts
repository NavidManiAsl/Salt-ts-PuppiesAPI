import { Schema,model} from "mongoose";


export interface Ipuppie {
    id:number;
    breed:string;
    name:string;
    bd:string;
}

const puppieSchema = new Schema<Ipuppie>({
    id: { type:Number, required: true, immutable: true, unique:true},
    breed: { type: String, required: false },
    name: { type: String, required: true },
    bd: { type:String, required: false }
})

export const Puppie = model<Ipuppie>('puppie',puppieSchema);


