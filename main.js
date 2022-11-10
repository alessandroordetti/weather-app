/* const request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/users");

request.send();

request.onload = () => {
    if (request.status === 200) {
        let array = JSON.parse(request.response);

        console.table(array);

        array.forEach(element => {
            console.log(element.name, element.username, element.address['city'])
        });
    } else {
        console.log (`error ${request.status}`);
    }
};

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    return response.json();
}).then(json=>{
    console.log(json);
}); */


axios.get('https://api.openweathermap.org/data/2.5/weather?lat=40.853294&lon=14.305573&appid=779225edbe9ab6777587f2b32f56db93&units=metric')
.then(response=>{
    console.log(response.data);
});
