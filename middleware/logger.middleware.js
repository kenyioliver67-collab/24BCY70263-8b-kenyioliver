const loggerMiddleware = (req, res, next) => {

    const start = Date.now();

    res.on("finish", () => {

        const duration = Date.now() - start;

        const logEntry = {
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            duration: duration
        };

        console.log(logEntry);

    });

    next();

};

module.exports = loggerMiddleware;