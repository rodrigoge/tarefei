import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './configs/swaggerConfig';
import { router } from './routes';

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { app };

