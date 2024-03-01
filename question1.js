//Q1. Find all the movies with total earnings more than $500M. 


//let movieData=require("./movieData.js")

function totalEarningsGreaterThan500M(obj){
    let moviesEarningsGreaterThan500={};

    for(let movie in obj){
        for(let key in obj[movie]){
            if(key==="totalEarnings"){
                let earnings=obj[movie][key].slice(1,obj[movie][key].length-1);
                if(+earnings>500){
                    moviesEarningsGreaterThan500[movie]=obj[movie][key];

                }
            }
        }
    }

    return moviesEarningsGreaterThan500;
}

module.exports=totalEarningsGreaterThan500M;

//console.log(totalEarningsGreaterThan500M(movieData));