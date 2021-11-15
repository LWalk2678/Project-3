import { Router } from 'express'
import * as controllers from '../controllers/smoothies.js'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/smoothies', controllers.getSmoothies)
router.get('/smoothies/:id', controllers.getSmoothie)
router.post('/smoothies', restrict, controllers.createSmoothie)
router.put('/smoothies/:id', restrict, controllers.updateSmoothie)
router.delete('/smoothies/:id', restrict, controllers.deleteSmoothie)

export default router
