// List of button and content IDs
const buttonIds = [
  "main-page-btn", "leaderboard-btn", "changelog-btn", "sink-btn", 
  "nightshade-btn", "timor-btn", "the-moon-below-btn", "lucid-chaos-btn", 
  "butiti-iii-btn", "confusion-btn", "stalemate-redux-btn", "killbot-btn", 
  "omicron-btn", "polygonal-paradox-btn", "neurostasis-btn", "black-blizzard-btn", 
  "berserk-btn", "hyper-paradox-btn", "dmg-ctrl-btn", "balengu-vortex-btn", 
  "the-cellar-path-btn", "ruber-cash-22-btn", "worse-trip-btn", "subsonic-btn", 
  "dolos-btn", "the-sulpher-sea-btn", "rash-btn", "ithacropolis-btn",
  "endless-dream-btn", "speedrun-btn", "darkened-btn", "removed-submission-btn", 
  "xuser-morelike-luser-btn", "devoid-btn", "le-midd-mapperoonies-btn", "hot-rod-btn", 
  "coolie-mazie-paloozi-btn", "falcon16-btn", "miss-you-btn", "blade-of-justice-btn", 
  "biohazard-btn", "artifice-btn", "protoflicker-btn", "anahita-btn", 
  "bloodbath-btn", "ecstasy-btn", "oopz-btn", "cytokinesis-btn", 
  "motorbreath-btn", "gewerbix-btn", "molten-mercury-btn", "apex-btn", "opsm1-btn",
  "sigma-interface-btn", "prismatic-haze-btn", "carcano-btn",
  "moment-btn", "disentombed-btn", "innards-btn",
  "overtime-btn", "goldcrest-palace-btn", "n0-btn",
  "remember-btn", "cave-of-heart-btn", "cluttered-confusion-btn",
  "triple-six-btn", "digital-disarray-btn", "aftermath-btn",
  "malevolent-maelstrom-btn", "chopstep-btn", "frozen-btn",
  "shatter-btn", "redemption-arc-btn", "want-me-btn",
  "eternal-btn", "sorryforpartyrocking-btn", "niflheim-btn", "idols-btn"
];

const contentIds = [
  "main-page-content", "leaderboard-content", "changelog-content", "sink-content", 
  "nightshade-content", "timor-content", "the-moon-below-content", "lucid-chaos-content", 
  "butiti-iii-content", "confusion-content", "stalemate-redux-content", "killbot-content", 
  "omicron-content", "polygonal-paradox-content", "neurostasis-content", "black-blizzard-content", 
  "berserk-content", "hyper-paradox-content", "dmg-ctrl-content", "balengu-vortex-content", 
  "the-cellar-path-content", "ruber-cash-22-content", "worse-trip-content", "subsonic-content", 
  "dolos-content", "the-sulpher-sea-content", "rash-content", "ithacropolis-content",
  "endless-dream-content", "speedrun-content", "darkened-content", "removed-submission-content", 
  "xuser-morelike-luser-content", "devoid-content", "le-midd-mapperoonies-content", "hot-rod-content", 
  "coolie-mazie-paloozi-content", "falcon16-content", "miss-you-content", "blade-of-justice-content", 
  "biohazard-content", "artifice-content", "protoflicker-content", "anahita-content", 
  "bloodbath-content", "ecstasy-content", "oopz-content", "cytokinesis-content", 
  "motorbreath-content", "gewerbix-content", "molten-mercury-content", "apex-content", "opsm1-content", 
  "sigma-interface-content", "prismatic-haze-content", "carcano-content",
  "moment-content", "disentombed-content", "innards-content",
  "overtime-content", "goldcrest-palace-content", "n0-content",
  "remember-content", "cave-of-heart-content", "cluttered-confusion-content",
  "triple-six-content", "digital-disarray-content", "aftermath-content",
  "malevolent-maelstrom-content", "chopstep-content", "frozen-content",
  "shatter-content", "redemption-arc-content", "want-me-content",
  "eternal-content", "sorryforpartyrocking-content", "niflheim-content", "idols-content"
];

// Function to switch tabs
function switchTab(buttonId, contentId) {
  // First, hide all content
  contentIds.forEach(id => {
    const contentElement = document.getElementById(id);
    if (contentElement) {
      contentElement.classList.remove("active");
    }
  });

  // Show the specific content associated with the clicked button
  const contentElement = document.getElementById(contentId);
  if (contentElement) {
    contentElement.classList.add("active");
  }

  // Remove active class from all buttons
  buttonIds.forEach(id => {
    const buttonElement = document.getElementById(id);
    if (buttonElement) {
      buttonElement.classList.remove("active");
    }
  });

  // Add active class to the clicked button
  const buttonElement = document.getElementById(buttonId);
  if (buttonElement) {
    buttonElement.classList.add("active");
  }
}

// Add event listeners to each button
buttonIds.forEach((buttonId, index) => {
  const button = document.getElementById(buttonId);
  const contentId = contentIds[index];

  if (button) {
    button.addEventListener("click", () => {
      switchTab(buttonId, contentId);
    });
  } else {
    console.error(`Button with ID "${buttonId}" not found.`);
  }
});
