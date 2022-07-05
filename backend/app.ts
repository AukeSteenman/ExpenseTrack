import express, { Application, Request, Response, NextFunction } from 'express';

const PORT = 3001;

const app: Application = express();
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('hello');
});

app.listen(PORT, () => console.log('Express server started'));
