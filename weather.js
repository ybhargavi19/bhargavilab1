async function weather(){
    let name=document.getElementById("city");
    let url="https://api.openweathermap.org/data/2.5/weather?q="+name.value+"&appid=8ed93ccc028a16b95ceed30d0330bdb2&unit:metrics;";
    const response=await fetch(url);
    const data = await response.json();
    console.log(data);
    let {main:{temp,humidity,pressure}}=data;
    console.log("temperature:"+temp);
    console.log("humidity:"+humidity);
    console.log("pressure:"+pressure);
}