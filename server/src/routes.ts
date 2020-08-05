import express from 'express'
import ClassesController from './controllers/classesController'
import ConnectionController from './controllers/connectionsController'

const routes = express.Router()
const ClassesControllers = new ClassesController()
const ConnectionsController = new ConnectionController()

routes.post('/classes', ClassesControllers.create)
routes.get('/classes', ClassesControllers.index)

routes.post('/connections', ConnectionsController.create)
routes.get('/connections', ConnectionsController.index)

export default routes