
const API_KEY = "eSBJhhlpzWuZ3HVAC1LdWh1ggbSlPTHv";
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=eSBJhhlpzWuZ3HVAC1LdWh1ggbSlPTHv&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";


//fetch GIFs
async function fetchGifs(query = "dogs") {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
        const response = await fetch(url);
        const data = await response.json();

        // Extract original GIF URLs
        const images = data.data.map(gif => gif.images.original.url);
        console.log(images); // Preview array in console
        return images;
    } catch (error) {
        console.error("Error fetching GIFs:", error);
        return [];
    }
}

// display GIFs
function displayGifs(images) {
    gifContainer.innerHTML = ""; // Clear previous GIFs
    for (let url of images) {
        gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    }
}

// Event listener for button click
fetchBtn.addEventListener("click", async () => {
    // Get search term from input, default to "dogs"
    const searchTerm = searchInput.value.trim() || "dogs";

    // Fetch GIFs and display them
    const images = await fetchGifs(searchTerm);
    displayGifs(images);
});

