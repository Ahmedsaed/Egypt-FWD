// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = '8235a95f7b4fd7694f69eb38024f08de&units=imperial';

// Global Variables
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', getData);

/* Function called by event listener */
function getData(e){
    const zipCode = document.getElementById('zip').value;
    const userResponse = document.getElementById('feelings').value;
    getWeather(baseURL, zipCode, apiKey)
    .then((data) => {
        updateProjectData('/add', {
            temperature: data.main.temp,
            date: newDate,
            userResponse: userResponse
        });
    })
    .then(() => retrieveProjectData('/all'));
}

/* Function to GET Web API Data*/
const getWeather = async (baseURL, zipCode, key)=>{
    const res = await fetch(baseURL + zipCode + ",us&appid=" + key)
    try {
        const data = await res.json();
        return data;
    }  catch(error) {
        console.log("error", error);
    }
}

/* Function to POST data */
const updateProjectData = async (url = '', data = {})=>{
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),     
    });

    try {
        const newData = await response.json();
        return newData;
    }catch(error) {
        console.log("error", error);
    }
};

/* Function to GET Project Data */
const retrieveProjectData = async (url='') => { 
    const request = await fetch(url);
    try {
        const data = await request.json();
        const date = document.getElementById('date');
        const temp = document.getElementById('temp');
        const content = document.getElementById('content');

        date.innerHTML = data.date;
        temp.innerHTML = Math.round(data.temperature) + ' degrees';
        content.innerHTML = data.userResponse;
    }
    catch(error) {
        console.log("error", error);
    }
};