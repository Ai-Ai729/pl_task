import express from 'express';
import morgan from 'morgan';

import serviceRoutes from './routes/index.js'
import config from './config.js';

const PORT = process.env.PORT ?? config.service.port;
const app = express();
const logger = morgan('combined')

app.use(express.json())
app.use(logger)
app.use(serviceRoutes)

app.listen(PORT, () => {
    console.log(`Service has been started on port ${PORT}...`)
})


