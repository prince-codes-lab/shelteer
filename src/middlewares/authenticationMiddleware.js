const jwt = require('jsonwebtoken')
const asyncWrapper = require('../utils/asyncWrapper')
const AppError = require('../utils/appError')


const authenticateUser = asyncWrapper(
    async (req, res, next) => {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return next(new AppError('No token provided', 401))
        }

        const token = authHeader.split(' ')[1]

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded
            next()
        } catch (err) {
            return next(new AppError('Invalid token', 401))
        }
    }
)

module.exports = authenticateUser