// script.js

// Check if the session has been created
if (!sessionStorage.getItem('userSession')) {
    // If the session doesn't exist, create it
    sessionStorage.setItem('userSession', 'active');
  
    // Set a timeout to open a new page after a certain interval (e.g., 5000 milliseconds = 5 seconds)
    setTimeout(function() {
      window.location.href = 'Album/index.html';
    }, 12000); // Adjust the time interval as needed
  }
  