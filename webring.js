(function() {
    // URL to the raw version of your gist text file (update if necessary)
    const rawUrl = 'https://raw.githubusercontent.com/tc-tommo/ringmaster/refs/heads/main/sites.txt';

    fetch(rawUrl, { cache: 'no-cache' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.text();
        })
        .then(text => {
            // Split the file text into an array: each non-empty line is assumed to be a site hostname.
            let sites = text.trim()
                .split(/\r?\n/)
                .map(line => line.trim())
                .filter(line => line.length > 0);

            if (sites.length === 0) {
                console.error("No sites found in the webring data.");
                return;
            }

            // Get the current site's hostname and remove any leading 'www.'.
            let currentHostname = window.location.hostname.replace(/^www\./, '');
            let currentIndex = sites.indexOf(currentHostname);

            // If the current site is not in the list, default to the first site.
            if (currentIndex === -1) {
                currentIndex = 0;
            }

            const totalSites = sites.length;
            // Compute previous and next indices (wrapping around)
            const prevIndex = (currentIndex - 1 + totalSites) % totalSites;
            const nextIndex = (currentIndex + 1) % totalSites;

            // Retrieve the webring button elements
            const prevButton = document.getElementById('webring-prev');
            const nextButton = document.getElementById('webring-next');

            if (prevButton) {
                prevButton.addEventListener('click', function() {
                    window.location.href = 'https://' + sites[prevIndex];
                });
            }

            if (nextButton) {
                nextButton.addEventListener('click', function() {
                    window.location.href = 'https://' + sites[nextIndex];
                });
            }
        })
        .catch(error => console.error('Error loading webring data:', error));
})(); 
