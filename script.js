function switchTab(buttonId, contentId) {
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
    "sigma-interface-content", "prismatic-haze-content", "carcano-content", "moment-content",
    "disentombed-content", "innards-content", "overtime-content", "goldcrest-palace-content",
    "n0-content", "remember-content", "cave-of-heart-content", "cluttered-confusion-content",
    "triple-six-content", "digital-disarray-content", "aftermath-content", "malevolent-maelstrom-content",
    "chopstep-content", "frozen-content", "shatter-content", "redemption-arc-content",
    "want-me-content", "eternal-content", "sorryforpartyrocking-content", "niflheim-content",
    "idols-content"
  ];

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
    "motorbreath-btn", "gewerbix-btn", "molten-mercury-btn", "opsm1-btn", "apex-btn",
    "sigma-interface-btn", "prismatic-haze-btn", "carcano-btn", "moment-btn",
    "disentombed-btn", "innards-btn", "overtime-btn", "goldcrest-palace-btn",
    "n0-btn", "remember-btn", "cave-of-heart-btn", "cluttered-confusion-btn",
    "triple-six-btn", "digital-disarray-btn", "aftermath-btn", "malevolent-maelstrom-btn",
    "chopstep-btn", "frozen-btn", "shatter-btn", "redemption-arc-btn",
    "want-me-btn", "eternal-btn", "sorryforpartyrocking-btn", "niflheim-btn",
    "idols-btn"
  ];

  // Update content visibility
  contentIds.forEach(id => document.getElementById(id).classList.remove("active"));
  document.getElementById(contentId).classList.add("active");

  // Update active tab styles
  buttonIds.forEach(id => document.getElementById(id).classList.remove("active"));
  document.getElementById(buttonId).classList.add("active");
}

// Add event listeners for switching tabs
document.querySelectorAll("[id$='-btn']").forEach(button => {
  const id = button.id.replace("-btn", "-content");
  button.addEventListener("click", () => switchTab(button.id, id));
});

// Add event listeners for the .button class to load content
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    try {
      // Replace this with your actual logic to load content
      const contentId = button.dataset.contentId; // Example
      if (!contentId) throw new Error('Invalid content ID');
      
      const content = document.getElementById(contentId);
      if (!content) throw new Error(`Content not found for ID: ${contentId}`);
      
      document.getElementById('mainContent').innerHTML = content.innerHTML;
    } catch (error) {
      console.error(error.message); // Log the error for debugging
      document.getElementById('mainContent').innerHTML = `<p>Oops! Unable to load the selected content.</p>`;
    }
  });
});
