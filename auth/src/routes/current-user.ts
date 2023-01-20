import express from 'express'
const router = express.Router()


router.get('/api/users/currentuser',(req,res) => {
    res.send("kourada")

})

export {router as currentUserRouter}