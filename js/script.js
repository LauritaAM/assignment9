console.log("script.js loaded");
const API_KEY = "eSBJhhlpzWuZ3HVAC1LdWh1ggbSlPTHv";
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=eSBJhhlpzWuZ3HVAC1LdWh1ggbSlPTHv&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

async function fetchGifs() {
    try {
        const response = await fetch(endpoint);      // Use your endpoint constant
        const data = await response.json();          // Parse JSON
        const images = data.data.map(gif => gif.images.original.url); // Extract URLs
        console.log(images);                          // Preview in console
        return images;                                // Return array
    } catch (error) {
        console.error("Error fetching GIFs:", error);
        return [];
    }
}

const gifContainer = document.querySelector("#gif-container");
const fetchBtn = document.querySelector("#fetch-gif-btn");

fetchBtn.addEventListener("click", async () => {
    const images = await fetchGifs();             // Step 7 function
    gifContainer.innerHTML = "";                  // Clear previous GIFs
    for (let url of images) {
        gifContainer.innerHTML += `<img src="${url}" class="col-3 mb-3">`;
    }
});

