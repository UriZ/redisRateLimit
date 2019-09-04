
let RateLimiter = require ('./rateLimiter.js');
let redis = require('redis');


let limiter = new RateLimiter({});
limiter.limit("request");

