function switchTab(buttonId, contentId) {
  const contentIds = ["main-page-content", "leaderboard-content", "changelog-content", "sink-content", "nightshade-content", "timor-content", "the-moon-below-content", "lucid-chaos-content", "butiti-iii-content", "confusion-content", "stalemate-redux-content", "killbot-content", "omicron-content"];
  const buttonIds = ["main-page-btn", "leaderboard-btn", "changelog-btn", "sink-btn", "nightshade-btn", "timor-btn", "the-moon-below-btn", "lucid-chaos-btn", "butiti-iii-btn", "confusion-btn", "stalemate-redux-btn", "killbot-btn", "omicron-btn"];

  // Update content visibility
  contentIds.forEach(id => document.getElementById(id).classList.remove("active"));
  document.getElementById(contentId).classList.add("active");

  // Update active tab styles
  buttonIds.forEach(id => document.getElementById(id).classList.remove("active"));
  document.getElementById(buttonId).classList.add("active");
}

// Add event listeners
document.getElementById("main-page-btn").addEventListener("click", () => switchTab("main-page-btn", "main-page-content"));
document.getElementById("leaderboard-btn").addEventListener("click", () => switchTab("leaderboard-btn", "leaderboard-content"));
document.getElementById("changelog-btn").addEventListener("click", () => switchTab("changelog-btn", "changelog-content"));
document.getElementById("sink-btn").addEventListener("click", () => switchTab("sink-btn", "sink-content"));
document.getElementById("nightshade-btn").addEventListener("click", () => switchTab("nightshade-btn", "nightshade-content"));
document.getElementById("timor-btn").addEventListener("click", () => switchTab("timor-btn", "timor-content"));
document.getElementById("the-moon-below-btn").addEventListener("click", () => switchTab("the-moon-below-btn", "the-moon-below-content"));
document.getElementById("lucid-chaos-btn").addEventListener("click", () => switchTab("lucid-chaos-btn", "lucid-chaos-content"));
document.getElementById("butiti-iii-btn").addEventListener("click", () => switchTab("butiti-iii-btn", "butiti-iii-content"));
document.getElementById("confusion-btn").addEventListener("click", () => switchTab("confusion-btn", "confusion-content"));
document.getElementById("stalemate-redux-btn").addEventListener("click", () => switchTab("stalemate-redux-btn", "stalemate-redux-content"));
document.getElementById("killbot-btn").addEventListener("click", () => switchTab("killbot-btn", "killbot-content"));
document.getElementById("omicron-btn").addEventListener("click", () => switchTab("omicron-btn", "omicron-content"));
