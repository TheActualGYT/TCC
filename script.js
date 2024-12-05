// Function to switch between content and update active tabs
document.getElementById("main-page-btn").addEventListener("click", function() {
  // Show main page content and hide leaderboard content
  document.getElementById("main-page-content").classList.add("active");
  document.getElementById("leaderboard-content").classList.remove("active");

  // Set the active tab
  setActiveTab("main-page-btn");
});

document.getElementById("leaderboard-btn").addEventListener("click", function() {
  // Show leaderboard content and hide main page content
  document.getElementById("leaderboard-content").classList.add("active");
  document.getElementById("main-page-content").classList.remove("active");

  // Set the active tab
  setActiveTab("leaderboard-btn");
});

// Function to set the active tab style
function setActiveTab(tabId) {
  // Remove 'active' class from both tabs
  document.getElementById("main-page-btn").classList.remove("active");
  document.getElementById("leaderboard-btn").classList.remove("active");

  // Add 'active' class to the clicked tab
  document.getElementById(tabId).classList.add("active");
}

document.getElementById("leaderboard-btn").classList.add("change-color");  // Add class to change color
