// Function to switch between content and update active tabs
document.getElementById("main-page-btn").addEventListener("click", function() {
  // Show main page content and hide other content
  document.getElementById("main-page-content").classList.add("active");
  document.getElementById("leaderboard-content").classList.remove("active");
  document.getElementById("sink-content").classList.remove("active");
  document.getElementById("nightshade-content").classList.remove("active");

  // Set the active tab
  setActiveTab("main-page-btn");
});

document.getElementById("leaderboard-btn").addEventListener("click", function() {
  // Show leaderboard content and hide other content
  document.getElementById("main-page-content").classList.remove("active");
  document.getElementById("leaderboard-content").classList.add("active");
  document.getElementById("sink-content").classList.remove("active");
  document.getElementById("nightshade-content").classList.remove("active");

  // Set the active tab
  setActiveTab("leaderboard-btn");
});

// Add event listener for the new "#1 - Sink" tab
document.getElementById("sink-btn").addEventListener("click", function() {
  // Show sink content and hide other content
  document.getElementById("main-page-content").classList.remove("active");
  document.getElementById("leaderboard-content").classList.remove("active");
  document.getElementById("sink-content").classList.add("active");
  document.getElementById("nightshade-content").classList.remove("active");
  
  // Set the active tab
  setActiveTab("sink-btn");
});

// Add event listener for the new "#2 - Nightshade" tab
document.getElementById("sink-btn").addEventListener("click", function() {
  // Show nightshade content and hide other content
  document.getElementById("main-page-content").classList.remove("active");
  document.getElementById("leaderboard-content").classList.remove("active");
  document.getElementById("sink-content").classList.remove("active");
  document.getElementById("nightshade-content").classList.add("active");
  
  // Set the active tab
  setActiveTab("nightshade-btn");
});

// Function to set the active tab style
function setActiveTab(tabId) {
  // Remove 'active' class from all tabs
  document.getElementById("main-page-btn").classList.remove("active");
  document.getElementById("leaderboard-btn").classList.remove("active");
  document.getElementById("sink-btn").classList.remove("active");
  document.getElementById("nightshade-btn").classList.remove("active");

  // Add 'active' class to the clicked tab
  document.getElementById(tabId).classList.add("active");
}
