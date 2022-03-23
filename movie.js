async function movie(){
    let url = "https://imdb-api.com/API/AdvancedSearch/k_hyn89z61?title_type=tv_series&genres=action&countries=in&languages=te";
    const resp = await fetch(url);
    var data = await resp.json();
    console.log(data)
    let {results} = data;
    results.forEach(ele => {
        let{title,imdbRating}=ele;
        console.log("series is"+title+"\n imdbRating  value"+imdbRating);
        
    });
}