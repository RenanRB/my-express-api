import express, { NextFunction, Request, Response } from 'express';
import taskRoutes from './routes/tasks';

const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use('/tasks', taskRoutes); // Add this line to mount the Task API routes

app.use(cors({
	origin: 'http://localhost:4200'
}));

// Add this error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express and nodemon!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});