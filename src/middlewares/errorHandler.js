const AppError = require("../utils/appError");


const errorHandler = (err, req, res, next) => {

    if(err instanceof AppError){
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })

        console.log(`Operational Error: ${err.stack}, ${err.message}`);
    }
    else{
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong!'
        })
    }
}

module.exports = errorHandler