import express from 'express'
const router = express.Router()

router.get('/pi/users/signin',(req,res) => {
    res.send("kourada")

})

export {router as signinRouter}