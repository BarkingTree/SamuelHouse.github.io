// Event listener to load content on page loading
document.addEventListener("DOMContentLoaded", function() {
    
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
  });

  // On Click Perform 
  document.addEventListener("click", function(){
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };
  })

// On Scroll Perform
document.addEventListener("scroll", function(){
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };
  })


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


