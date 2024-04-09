// Helper wrapper code for handling async functions...
// Adavantage is no need to use try, catch or promise for everything

const asyncHandler = (requestHandler) => {
    return ((req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err));
    })
}

export {asyncHandler}











// AsyncHandler with Try Catch block 
/************************
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.staus(error.code || 500).json({
            success : false,
            message : error.message
        })
    }
}

export { asyncHandler } 


****************************************/