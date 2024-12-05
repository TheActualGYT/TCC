<script>
  function showMainPage() {
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('leaderboard').style.display = 'none';
  }

  function showLeaderboard() {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('leaderboard').style.display = 'block';
  }
</script>

document.getElementById("main-page-btn").addEventListener("click", function() {
  document.getElementById("content").innerHTML = `
    <h1>Welcome to The TCC List</h1>
    <p>This is the main content of your site.</p>
  `;
  // Update active tab styling
  setActiveTab("main-page-btn");
});

document.getElementById("leaderboard-btn").addEventListener("click", function() {
  document.getElementById("content").innerHTML = `
    <h1>Leaderboard</h1>
    <p>The leaderboard content will go here.</p>
  `;
  // Update active tab styling
  setActiveTab("leaderboard-btn");
});

// Function to set active tab
function setActiveTab(tabId) {
  // Remove 'active' class from both tabs
  document.getElementById("main-page-btn").classList.remove("active");
  document.getElementById("leaderboard-btn").classList.remove("active");

  // Add 'active' class to the clicked tab
  document.getElementById(tabId).classList.add("active");
}
