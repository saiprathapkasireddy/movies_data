//Q2. Find all the movies who got more than 3 oscarNominations and also totalEarning are more than $500M.

let movieData=require("./movieData.js");

function moviesWithMoreThanThreeOscarsAndTotalEarningsMoreThan500(obj){
    let movies=[];
    for(let movie in obj){
        let oscarNominations=0;
        let earnings='';
        for(let key in obj[movie]){
            if(key==="oscarNominations"){
                oscarNominations=obj[movie][key];
            }else if(key==="totalEarnings"){
                earnings=obj[movie][key].slice(1,obj[movie][key].length-1);
            }
        }
        if(oscarNominations>3 && +earnings>500){
            movies.push(movie);
        }
    }

    return movies;
}

console.log(moviesWithMoreThanThreeOscarsAndTotalEarningsMoreThan500(movieData));