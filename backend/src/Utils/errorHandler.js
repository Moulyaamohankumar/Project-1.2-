class errorHnadler extends Error {
    constructor(statusCode,message){
        super(message);
        this.statusCode=statusCode;
    }
}

module.exports={errorHnadler}