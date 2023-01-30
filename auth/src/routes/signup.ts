import express, {Request,Response} from 'express'
import { body } from 'express-validator'
import { BadRequestError } from '../errors/bad-request-error'
import { User } from '../models/user'
import jwt from 'jsonwebtoken'
import { validateRequest } from '../middlewares/validate-request'

const router = express.Router()

router.post('/api/users/signup',[
    body('email')
    .isEmail()
    .withMessage('Email must be provided'),
    body('password')
    .trim()
    .isLength({ min: 5, max:12})
    .notEmpty()
    .withMessage('Password must be provided')

    

], validateRequest,
async (req: Request,res: Response) => {
    const {email, password} = req.body
    const existingUser = await User.findOne({email})

    if(existingUser) {
        throw new BadRequestError('Bad Credentials')
    }

    const user = User.build({ email, password})
    await user.save()

    const userJwt = jwt.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_KEY!)

    req.session = {

        jwt: userJwt
    }

    res.status(201).send(user)

    


 
}) 

export {router as signupRouter}