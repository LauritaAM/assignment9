console.log("script.js loaded");
const API_KEY = "eSBJhhlpzWuZ3HVAC1LdWh1ggbSlPTHv";
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=eSBJhhlpzWuZ3HVAC1LdWh1ggbSlPTHv&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

// Step 3: Function to fetch GIFs
async function fetchGifs(query = "dogs") {
    try {
        // Build the URL with the search query
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

        // Fetch data from Giphy
        const response = await fetch(url);

        // Convert response to JSON
        const data = await response.json();

        // Extract original GIF URLs into an array
        const images = data.data.map(gif => gif.images.original.url);

        console.log(images); // Preview in console
        return images;

    } catch (error) {
        console.error("Error fetching GIFs:", error);
        return [];
    }
}

