class ErrorHandler extends Error {
    constructor(message, stautsCode){
        super(message)
        this.stautsCode = stautsCode;
        Error.captureStackTrace(this,this.constructor)
    }
}
  module.exports = ErrorHandler;