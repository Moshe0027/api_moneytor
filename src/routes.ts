import { Express, Request, Response } from 'express'
import { getWordHandler, createWordHandler } from './controller/lang.controller'
import validateResource from './middleware/validateResource'
import { createWordSchema } from './schema/lang.schema'

const routes = (app: Express) => {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

    app.get('/api/word/', getWordHandler)

    app.post('/api/word', [validateResource(createWordSchema)], createWordHandler)
}

export default routes
