let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
   menu.classList.toggle('bs-x');
   navlist.classList.toggle('open');
   
};

const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.eSports',{delay:150, origin:'top'});
sr.reveal('.icons',{delay:200, origin:'left'});
   // Function to fetch visitor count from Google Analytics Reporting API
        function fetchVisitorCount() {
            // Make an API call to retrieve visitor count data
            // Replace 'YOUR_VIEW_ID' with your Google Analytics view ID
            fetch('https://esportsjourney.github.io/tournament/')
            .then(response => response.json())
            .then(data => {
                // Extract visitor count from the response
                const visitorCount = data.rows[0][0];
                // Update the HTML element with the visitor count
                document.getElementById('visitor-count').innerText = visitorCount;
            })
            .catch(error => console.error('Error fetching visitor count:', error));
        }

        // Call the function when the page loads
        window.onload = fetchVisitorCount;