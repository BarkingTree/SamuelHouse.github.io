document.addEventListener("DOMContentLoaded", function() {
    getInflationJSON("RPI")
    })


function getInflationJSON(inflationType) {
    console.log("Called")
    async function fetchJSON() {
        let response  
        switch (inflationType) {
            case "RPI":  
            response = await fetch('../assets/data/rpi.json');
            break;
            case "CPIH":
            response = await fetch("../assets/data/cpih.json");
            break;
            default: 
            response = await fetch('../assets/data/rpi.json');
            break;
        }   
        const obj = await response.json();
        return obj
    }

    let jsonData;   
    (async () => {
    jsonData = await fetchJSON()
    // let inflationYears = jsonData["years"];
    
    document.getElementById("jsonData").innerHTML = JSON.stringify(jsonData);
    document.getElementById("load").innerHTML = loaded;
    console.log(jsonData)
    })()
}

