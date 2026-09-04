const asyncWrapper = require('../utils/asyncWrapper')
const jwt = require('jsonwebtoken')
const arg2 = require('argon2')
const {User} = require('../db/index')
const AppError = require('../utils/AppError')


// 
// try {
//   if (await argon2.verify("<big long hash>", "password")) {
//     // password match
//   } else {
//     // password did not match
//   }
// } catch (err) {
//   // internal failure
// }

const generateToken = (payLoad) => {

    return jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: '1h' });

}



//testing for valid Email address
const emailVerifyer = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(e);

}//unlocking

const signUp = asyncWrapper(
    async (req, res, next) => {
        // Your signup logic here
        const {username, email, password} = req.body;

        if(username.split(' ').length < 2 ){
            return next(new AppError('Please provide your first and last name', 400))
            }
        
        const firstName = username.split(' ')[0]
        const lastName = username.split(' ')[1] || ''
        const emailToBeStored = email.trim().toLowerCase()
        const hash = await arg2.hash(password)
        console.log(hash)
        const user = {
            firstName,
            lastName,
            email: emailToBeStored,
            password: hash
        }
        // Save the user to the database (this is just a placeholder)
        // await saveUserToDatabase(user);
        const token = generateToken({ email: emailToBeStored, password })

       const createdUser = await User.create(user)

       if(!createdUser){
   return next(new AppError('User Could not be created, reload and try again', 500))
       }


        res.status(201).json({
            status: 'success',
            token: token
        })
    }
)


const login = asyncWrapper(
    async (req, res, next) => {
        // Your login logic here
        const {username, password} = req.body;

       const checkPass = await arg2.verify(password, user.password)
        // work on the Access and refresh token

        const token = generateToken({ username, password })

        res.status(200).json({
            status: 'success',
            token: token
        })

    }
)


async function test(){const password = 'hello4'
        const hash = await arg2.hash(password)
        console.log(hash)
    
    }

test()

