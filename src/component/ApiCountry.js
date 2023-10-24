
async function dataCountriesApi(){
    let apiUrl = 'https://restcountries.com/v3.1/region/asia?fields=name,flags,idd'; 
    const response = await fetch(apiUrl)
    .then(function(response) {
        if (!response.ok) {
            throw new Error('La solicitud no tuvo éxito');
        }
        return response.json();
    })
    .then(function(data) {
        
        return data
    })
  
    return response
}

const dataApi = await dataCountriesApi();


function randomDataSelectionApi( num ){
    const copyData = []
    let random = 0

    for (let index = 0; index < num; index++) {
        random = Math.floor(Math.random() * dataApi.length);
        copyData.push(dataApi[random])
        copyData.push(dataApi[random])
        dataApi.splice(random,1);
    }
    return copyData
}

function random(data){
    const copyData = []
    let random = 0
    let length = data.length

    for (let index = 0; index < length; index++) {
        random = Math.floor(Math.random() * data.length);
        copyData[index] = data[random];
        data.splice(random, 1)
    }
    return copyData
}

function mainApi(numCard){
    const data = random (randomDataSelectionApi(numCard));
    return data;
}

export default mainApi;