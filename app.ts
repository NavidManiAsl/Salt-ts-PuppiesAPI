import express from 'express';
import { Application, Request,Response } from 'express';
import router from './routes'
const app: Application = express();
app.use(express.json())
app.use('/api/puppies/', router)


app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

export default app;
