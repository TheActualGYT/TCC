// Function to switch between content and update active tabs
document.getElementById("main-page-btn").addEventListener("click", function() {
  // Show main page and hide leaderboard
  document.getElementById("content").innerHTML = `
    <h1>Welcome to The TCC List</h1>
    <p>This is the main content of your site.</p>
  `;
  // Set the active tab
  setActiveTab("main-page-btn");
});

document.getElementById("leaderboard-btn").addEventListener("click", function() {
  // Show leaderboard content
  document.getElementById("content").innerHTML = `
    <h1>Leaderboard</h1>
    <p>The leaderboard content will go here.</p>
  `;
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
