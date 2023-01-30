import express from 'express'
import { currentUser } from '../middlewares/current-user'
const router = express.Router()

//react needs to check what user is currently logged in 

router.get('/api/users/currentuser',currentUser, (req,res) => {
res.send({ currentUser: req.currentUser || null})
})

export {router as currentUserRouter}