
// Function to get URL parameter by name
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Fetch certificate data from JSON file and display it based on the URL ID
fetch('certificates.json')
    .then(response => response.json())
    .then(data => {
        const certificateId = getURLParameter("id"); // Get the certificate ID from the URL
        let certificateFound = false;

        // Iterate through the data to find a match for the certificate ID
        data.certificates.forEach(cert => {
            if (cert.id === certificateId) {
                certificateFound = true;

                // Populate the certificate details dynamically
                document.getElementById("certificate-id").textContent = cert.id;
                document.getElementById("recipient-name").textContent = cert.recipientName;
                document.getElementById("certificate-image").src = cert.certificateImage;
                // document.getElementById("issued-date").textContent = cert.issuedDate;
                // document.getElementById("college-name").textContent = cert.collegeName;

                // Set verification status (you can modify this depending on the certificate's status)
                // document.getElementById("verification-status").textContent = 'Verified';
            }
        });

        // If no matching certificate is found, show a message
        if (!certificateFound) {
            document.querySelector('.container').innerHTML = '<h2>No certificate found with the given ID.</h2>';
        }
    })
    .catch(error => {
        console.error("Error fetching certificate data:", error);
    });