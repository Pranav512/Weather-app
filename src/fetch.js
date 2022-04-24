async function getData() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?units=metric&q=fulda&appid=14394b7a4926df4344a0c0be821e5b89');
    const data = await response.json();
    return data;
}

export default getData;
