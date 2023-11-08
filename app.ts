import express from 'express';
import bazaarRoutes from './routes/bazaarRoutes'

const app = express();
app.use(express.json({ limit: '50mb' }));

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
  });

  //Set routes
app.use('/bazaar/', bazaarRoutes);

export { app };
