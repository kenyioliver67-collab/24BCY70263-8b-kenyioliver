const errorMiddleware = (err, req, res, next) => {

    console.error(err); // <-- ADD THIS

    const status = err.statusCode || err.status || 500;

    const message = err.message || "Internal Server Error";

    res.status(status).json({
        success: false,
        message: message
    });

};

module.exports = errorMiddleware;