document.addEventListener("DOMContentLoaded", function() {
    logJSONData()
    getInflationJSON()
  });

  async function logJSONData() {
    fetch('https://api.github.com/users/deekshasharma')
   .then(response => response.json())
   .then(json => console.log(JSON.stringify(json)))
  }



function getInflationJSON() {
    async function fetchJSON() {    
        const response = await fetch('https://api.beta.ons.gov.uk/v1/datasets/weekly-deaths-age-sex');
        const obj = await response.json();
        return obj
    }
    let jsonData;   
    (async () => {
    jsonData = await fetchJSON()
    // let inflationYears = jsonData["years"];
    
    document.getElementById("jsonData").innerHTML = JSON.stringify(jsonData);
    document.getElementById("load").innerHTML = loaded;
    })()
}


