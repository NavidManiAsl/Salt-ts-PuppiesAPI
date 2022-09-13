import express , {Request, Response, Router}from 'express';
import { Puppie, Ipuppie} from './models';
import  {getAll}  from './controllers';
const router:Router = express.Router();

// const getAll = async()=>{
//     const puppies = await Puppie.find()
//     return puppies
// }

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

router.post('/', async (req:Request, res:Response)=>{
    const puppie = new Puppie({...req.body})
    try {
        if (puppie.id && puppie.name) {
           await  puppie.save()
           res.status(201).send(`Data has been saved at the database : ${puppie}`)
        } else {
            res.status(400).send('invalid request')
        }
    } catch (error) {
      res.status(500).send(error);  
    }
})


export default router;