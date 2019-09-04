class RateLimiter {

    constructor(options){

        this.getOptions = () =>{
            return options;
        }

    }

    limit(request, callback){
        console.log("limiter was run on request " + request);
    }
}

module.exports = RateLimiter;