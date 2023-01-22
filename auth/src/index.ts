import express from 'express'
import {json} from 'body-parser'
import 'express-async-errors'
 


import { currentUserRouter } from './routes/current-user'
import { signoutRouter } from './routes/signout'
import { signinRouter } from './routes/signin'
import { signupRouter } from './routes/signup'
import { errorHandler } from './middlewares/error-handler'
import { NotFound } from './errors/not-found'


const app = express()


app.use(json())

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.get('*', async () => {
    throw new NotFound()
})
app.use(errorHandler)




app.listen(3000, () => {
    console.log('3000....!...... !!!!!!')
})