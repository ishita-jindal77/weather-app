
 // Change this to any city you want

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a173513e32msh17726ed826d53c8p179137jsnb02f328154f6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

async function fetchData(city) {
    try {
        cityname.innerHTML=city
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
        const result = await response.json();
        console.log(result);
        cloud_pct.innerHTML =result.cloud_pct 
        temp.innerHTML =result.temp 
        feels_like.innerHTML =result.feels_like 
        humidity.innerHTML =result.humidity 
        min_temp.innerHTML =result.min_temp 
        max_temp.innerHTML =result.max_temp 
        wind_speed.innerHTML =result.wind_speed 
        wind_degrees.innerHTML =result.wind_degrees 
        sunrise.innerHTML =result.sunrise 
        sunset.innerHTML =result.sunset
    } catch (error) {
        console.error(error);
    }
}



submit.addEventListener("click",(e)=>{
    e.preventDefault()
    fetchData(city.value);
})
fetchData("Delhi");

async function fetchDatatable(city2) {
    try {
        //  cityname.innerHTML=city
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2, options);
        const result = await response.json();
        console.log(result);
       
        temp2.innerHTML =result.temp 
        feels_like2.innerHTML =result.feels_like  
        min_temp2.innerHTML =result.min_temp 
        max_temp2.innerHTML =result.max_temp 
        wind_speed2.innerHTML =result.wind_speed 

      
       
    } catch (error) {
        console.error(error);
    }
}
async function fetchDatatable2(city3) {
    try {
        //  cityname.innerHTML=city
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city3, options);
        const result = await response.json();
        console.log(result);
       
        temp3.innerHTML =result.temp 
        feels_like3.innerHTML =result.feels_like  
        min_temp3.innerHTML =result.min_temp 
        max_temp3.innerHTML =result.max_temp 
        wind_speed3.innerHTML =result.wind_speed 

      
       
    } catch (error) {
        console.error(error);
    }
}
async function fetchDatatable3(city4) {
    try {
        //  cityname.innerHTML=city
        const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city4, options);
        const result = await response.json();
        console.log(result);
       
        temp4.innerHTML =result.temp 
        feels_like4.innerHTML =result.feels_like  
        min_temp4.innerHTML =result.min_temp 
        max_temp4.innerHTML =result.max_temp 
        wind_speed4.innerHTML =result.wind_speed 

      
       
    } catch (error) {
        console.error(error);
    }
}
fetchDatatable("canada");
fetchDatatable2("new york");
fetchDatatable3("bombay");

