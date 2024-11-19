fetch('./home.html') // Replace with the actual path to the HTML file
    .then(response => response.text()) // Read the HTML as text
    .then(htmlString => {
        // Create a temporary DOM element to parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        // Extract meaningful data
        const jsonData = {
            title: doc.title,
            styles: Array.from(doc.querySelectorAll('link[rel="stylesheet"]')).map(link => link.href),
            navigation: Array.from(doc.querySelectorAll('nav a')).map(link => ({
                href: link.getAttribute('href'),
                label: link.textContent.trim()
            })),
            aboutMedicines: doc.querySelector('.aboutmed')?.textContent.trim(),
            images: Array.from(doc.querySelectorAll('img')).map(img => ({
                src: img.src,
                alt: img.alt || 'No alt text',
                height: img.height,
                width: img.width
            }))
        };

        console.log("Extracted JSON:", jsonData);
    })
    .catch(error => {
        console.error("Error fetching or processing HTML:", error);
    });

