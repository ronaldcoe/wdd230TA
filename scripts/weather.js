function getTime() {
    let today = new Date();
    let time = today.getHours();
    return time
}
function convertToJson(response) {
    if (response.ok) {
        return response.json();
    } else {
        console.log('error: ', response);
    }
}

function newSearch(){

    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/guayaquil?unitGroup=us&key=EWQF52DJKF9B9NEMA45J3VZGW&contentType=json`;
    fetch(url).then(convertToJson).then(displayCurrentTemp);
}


function displayCurrentTemp(data) {
    let img = data.days[0].hours[getTime()-1].icon;
    let f = document.querySelector(".temp").innerHTML = data.days[0].hours[getTime()-1].temp;
    let c = Math.ceil((f - 32) * 0.5556);
    
    document.querySelector('.imgweather').src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${img}.png`;

    document.querySelector(".desc").innerHTML = data.days[0].hours[getTime()-1].conditions;
 
    document.querySelector(".temp").innerHTML = c + "<span>&#8451;</span>";
    document.querySelector(".windvalue").innerHTML = data.days[0].hours[getTime()-1].windspeed;


}

newSearch()
