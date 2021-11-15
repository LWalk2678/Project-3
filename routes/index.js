import { Router } from 'express'
import smoothiesRoutes from './smoothies.js'
import usersRoutes from './users.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRoutes)
router.use('/', smoothiesRoutes)

export default router
