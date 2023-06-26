// app.js

$(document).ready(function() {
    // Get the search input and button
    var searchInput = $("#search");
    var searchButton = $("#search-button");
  
    // Get the movies list
    var moviesList = $("#movies");
  
    // Handle the search button click event
    searchButton.click(function() {
      // Get the search term
      var searchTerm = searchInput.val();
  
      // Make an API request to get the movies
      $.getJSON("https://www.omdbapi.com/?s=" + searchTerm, function(data) {
        // Clear the movies list
        moviesList.empty();
  
        // Add the movies to the list
        for (var i = 0; i < data.results.length; i++) {
          var movie = data.results[i];
  
          var movieItem = $("<li>");
          movieItem.append($("<a href='#'>" + movie.title + "</a>"));
          moviesList.append(movieItem);
        }
      });
    });
  });
  