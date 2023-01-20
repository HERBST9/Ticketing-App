import express, {Request,Response} from 'express'
import { body, validationResult } from 'express-validator'
import { DatabaseConnectionError } from '../errors/database-connection-error'
import { RequestValidationError } from '../errors/request-validation-error'

const router = express.Router()

router.get('/api/users/signup',[
    body('email')
    .isEmail()
    .withMessage('Email must be provided'),
    body('password')
    .trim()
    .isLength({ min: 5, max:12})

],
(req: Request,res: Response) => {
    const errors = validationResult(req)
    if( !errors.isEmpty()) {
        throw new RequestValidationError(errors.array())
    }
    console.log('Creating user...')
    throw new DatabaseConnectionError()
    
    

  

}) 

export {router as signupRouter}