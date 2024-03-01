//Q.4 Sort movies (based on IMDB rating)
//if IMDB ratings are same, compare totalEarning as the secondary metric.


function sortingMovies(obj){
    let objToArr=Object.entries(obj);

    let sortedData=objToArr.sort((a,b)=>{
        if(a[1].imdbRating!=b[1].imdbRating){
            return a[1].imdbRating-b[1].imdbRating;
        }else{
            return Number(a[1].totalEarnings.slice(1,a[1].totalEarnings))-Number(b[1].totalEarnings.slice(1,b[1].totalEarnings))
        }
    });

    let res=sortedData.map((element)=>{
        return element[0];
    });

    return res;
}

module.exports=sortingMovies;