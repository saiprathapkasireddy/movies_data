//Q.5 Group movies based on genre. Priority of genres in case of multiple genres present are:
//drama > sci-fi > adventure > thriller > crime

let movieData=require("./movieData.js");

function moviesBasedOnGenre(obj){
   let movies={};
   for(let movie in obj){
    for(let key in obj[movie]){
        if(key==="genre"){
            if(obj[movie][key].includes("drama")){
                movies[movie]="drama";
            }else if(obj[movie][key].includes("sci-fi")){
                movies[movie]="sci-fi";
            }else if(obj[movie][key].includes("adventure")){
                movies[movie]="adventure";
            }else if(obj[movie][key].includes("thriller")){
                movies[movie]="thriller";
            }else if(obj[movie][key].includes("crime")){
                movies[movie]="crime";
            }
        }
    }
   } 

   return movies;
}


console.log(moviesBasedOnGenre(movieData));