//Q.3 Find all movies of the actor "Leonardo Dicaprio".

//let movieData=require("./movieData.js");


function allMoviesOfTheActorLeonardoDicaprio(obj){

    let allMoviesOfLeonardoDicaprio=[];

    for(let movie in obj){
        for(let key in obj[movie]){
            if(key==="actors"){
                if(obj[movie][key].includes("Leonardo Dicaprio")){
                    allMoviesOfLeonardoDicaprio.push(movie);
                }
            }
        }
    }

    return allMoviesOfLeonardoDicaprio;

}

module.exports=allMoviesOfTheActorLeonardoDicaprio;


//console.log(allMoviesOfTheActorLeonardoDicaprio(movieData));