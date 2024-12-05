// Function to switch between content and update active tabs for the first two buttons
document.getElementById("main-page-btn").addEventListener("click", function () {
  document.getElementById("content").innerHTML = `
    <h1>Welcome to The TCC List</h1>
    <p>This is the main content of your site.</p>
  `;
  setActiveTab("main-page-btn");
});

document.getElementById("leaderboard-btn").addEventListener("click", function () {
  document.getElementById("content").innerHTML = `
    <h1>Leaderboard</h1>
    <p>The leaderboard content will go here.</p>
  `;
  setActiveTab("leaderboard-btn");
});

// Function to set the active tab style
function setActiveTab(tabId) {
  // Remove 'active' class from all buttons
  const allButtons = document.querySelectorAll(".tab-button");
  allButtons.forEach(button => button.classList.remove("active"));

  // Add 'active' class to the clicked tab
  document.getElementById(tabId).classList.add("active");
}

// Add 75 new buttons dynamically
const sidebar = document.querySelector(".left-sidebar"); // Sidebar container
for (let i = 1; i <= 75; i++) {
  const newButton = document.createElement("button");
  newButton.classList.add("tab-button");
  newButton.id = `button-${i + 2}`; // IDs start after the existing buttons
  newButton.textContent = `Button ${i + 2}`; // Text displays the button's number

  // Add click functionality to dynamically show content
  newButton.addEventListener("click", function () {
    // Display content for the clicked button
    const buttonNumber = i + 2; // The button number
    document.getElementById("content").innerHTML = `
      <h1>This is button #${buttonNumber}</h1>
      <p>This is the content for button #${buttonNumber}.</p>
    `;
    setActiveTab(newButton.id); // Set the active tab to the clicked button
  });

  // Append the button to the sidebar
  sidebar.appendChild(newButton);
}
