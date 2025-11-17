


function rateLimiter(){
    let hits=0;
    return function(){
        if(hits>5)return true;
        return ++hits;
    }
}

const RL = rateLimiter();


