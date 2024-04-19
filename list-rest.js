// JavaScript to handle form submission and redirect to Google Maps search
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the value from the input field
    const searchQuery = document.getElementById('search-input').value;

    // Append "restaurants" to the search query
    const searchQueryWithRestaurants = searchQuery + " restaurants";

    // Construct the Google Maps search URL with the modified search query
    const mapsSearchUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQueryWithRestaurants)}`;

    // Redirect the user to the Google Maps search URL
    window.location.href = mapsSearchUrl;
});
