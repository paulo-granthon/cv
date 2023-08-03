import express, { Request, Response } from 'express';
import { config as dotenvConfig } from 'dotenv';
// import cors from 'cors';

const app = express();

dotenvConfig();

const port = process.env.PORT || 8000;

// app.use(cors());
app.use(express.json());

app.get('/message', (req: Request, res: Response) => {
    res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
