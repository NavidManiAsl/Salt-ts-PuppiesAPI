import express , {Request, Response}from 'express';
import { Puppie, Ipuppie} from './models';
const router = express.Router();

const getAll = async()=>{
    const puppies = await Puppie.find()
    return puppies
}

router.get('/', async(_req:Request, res:Response ) => {
    try {
       
        res.send(await getAll())
    } catch (error) {
        res.status(500).send(error)
    }
});

router.get('/:id', async (req:Request, res:Response)=>{
    const {id }= req.params;
    try {
        const puppie = await Puppie.findOne({id:id})
        if(puppie){
            res.send(puppie)
        }else{
            res.status(404).send('Not found in the database!')
        }
    } catch (error) {
        res.status(500).send(error)
    } 
});


export default router;