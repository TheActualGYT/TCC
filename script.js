const buttonIds = [
  "main-page-btn",
  "leaderboard-btn",
  "changelog-btn",
  "dump-btn",
  "sink-btn",
  "nightshade-btn",
  "timor-btn",
  "the-moon-below-btn",
  "lucid-chaos-btn",
  "butiti-iii-btn",
  "confusion-btn",
  "stalemate-redux-btn",
  "killbot-btn",
  "omicron-btn",
  "polygonal-paradox-btn",
  "chroma-ii-btn",
  "neurostasis-btn",
  "black-blizzard-btn",
  "berserk-btn",
  "hyper-paradox-btn",
  "dmg-ctrl-btn",
  "balengu-vortex-btn",
  "the-cellar-path-btn",
  "ruber-cash-22-btn",
  "worse-trip-btn",
  "subsonic-btn",
  "dolos-btn",
  "the-sulpher-sea-btn",
  "rash-btn",
  "ithacropolis-btn",
  "endless-dream-btn",
  "speedrun-btn",
  "darkened-btn",
  "removed-submission-btn",
  "xuser-morelike-luser-btn",
  "devoid-btn",
  "le-midd-mapperoonies-btn",
  "hot-rod-btn",
  "coolie-mazie-paloozi-btn",
  "miss-you-btn",
  "falcon16-btn",
  "blade-of-justice-btn",
  "biohazard-btn",
  "artifice-btn",
  "protoflicker-btn",
  "anahita-btn",
  "bloodbath-btn",
  "ecstasy-btn",
  "molten-mercury-btn",
  "astrophobia-btn",
  "oopz-btn",
  "azure-fiesta-btn",
  "cytokinesis-btn",
  "motorbreath-btn",
  "gewerbix-btn",
  "apex-btn",
  "carcano-btn",
  "moment-btn",
  "opsm1-btn",
  "sigma-interface-btn",
  "prismatic-haze-btn",
  "disentombed-btn",
  "innards-btn",
  "overtime-btn",
  "goldcrest-palace-btn",
  "n0-btn",
  "remember-btn",
  "cave-of-heart-btn",
  "aftermath-btn",
  "cluttered-confusion-btn",
  "triple-six-btn",
  "digital-disarray-btn",
  "malevolent-maelstrom-btn",
  "chopstep-btn",
  "frozen-btn",
  "shatter-btn",
  "redemption-arc-btn",
  "want-me-btn",
  "eternal-btn",
  "niflheim-btn",
  "sorryforpartyrocking-btn",
  "idols-btn",
  "agen-wida-btn",
  "deflective-btn",
  "elliptic-curve-btn",
  "u235-btn",
  "dance-til-dawn-btn",
  "sarthix-btn",
  "welcome-to-gd-news-btn",
  "smartish-mode-btn",
  "brainrot-btn",
  "totem-btn",
  "minimum-btn",
  "myocardia-btn",
  "novalis-btn",
  "karma-btn",
  "heat-wave-btn",
  "aux-cord-btn",
  "manic-machine-btn",
  "cat-planet-btn",
  "twisted-tranquility-btn",
  "concaved-memories-btn",
  "wind-storm-btn",
  "daydream-btn",
  "brownoix-btn",
  "empyrean-btn",
  "mirage-btn",
  "red-world-rebirth-btn",
  "headlock-btn",
  "cerebral-hemorrhage-btn",
  "inflammable-infusion-btn",
  "loop-btn",
  "tech-manifestation-btn",
  "reanimate-btn",
  "cupid-btn",
  "doop-btn",
  "tornado-btn",
  "reflective-btn",
  "crowd-control-btn",
  "lotus-btn",
  "ferrum-frenzy-btn",
  "reverence-btn",
  "dismay-btn",
  "i-never-dream-btn",
  "any-percent-btn",
  "cerebral-torment-btn",
  "ballistic-funk-btn",
  "niflhel-btn",
  "sunburn-btn",
  "zettabyte-btn",
  "napalm-btn",
  "draco-meteor-btn",
  "artificial-dream-btn",
  "impasse-btn",
  "necropolix-btn",
  "hurricane-btn",
  "dismal-duststorm-btn",
  "snowdrift-btn",
  "retention-btn",
  "meltdown-btn",
  "broken-signal-btn",
  "hopping-over-puddles-btn",
  "unearthed-btn",
  "sky-tech-btn",
  "the-ultimate-phase-btn",
  "awakening-horus-btn",
  "acropolix-btn",
  "deception-dive-btn",
  "party-rock-anthem-btn",
  "ultrasans-btn",
  "phantasmagoria-btn",
  "lights-out-btn",
  "voided-btn",
  "hypersonic-btn",
];

const contentIds = [
  "main-page-content",
  "leaderboard-content",
  "changelog-content",
  "dump-content",
  "sink-content",
  "nightshade-content",
  "timor-content",
  "the-moon-below-content",
  "lucid-chaos-content",
  "butiti-iii-content",
  "confusion-content",
  "stalemate-redux-content",
  "killbot-content",
  "omicron-content",
  "polygonal-paradox-content",
  "chroma-ii-content",
  "neurostasis-content",
  "black-blizzard-content",
  "berserk-content",
  "hyper-paradox-content",
  "dmg-ctrl-content",
  "balengu-vortex-content",
  "the-cellar-path-content",
  "ruber-cash-22-content",
  "worse-trip-content",
  "subsonic-content",
  "dolos-content",
  "the-sulpher-sea-content",
  "rash-content",
  "ithacropolis-content",
  "endless-dream-content",
  "speedrun-content",
  "darkened-content",
  "removed-submission-content",
  "xuser-morelike-luser-content",
  "devoid-content",
  "le-midd-mapperoonies-content",
  "hot-rod-content",
  "coolie-mazie-paloozi-content",
  "miss-you-content",
  "falcon16-content",
  "blade-of-justice-content",
  "biohazard-content",
  "artifice-content",
  "protoflicker-content",
  "anahita-content",
  "bloodbath-content",
  "ecstasy-content",
  "molten-mercury-content",
  "astrophobia-content",
  "oopz-content",
  "azure-fiesta-content",
  "cytokinesis-content",
  "motorbreath-content",
  "gewerbix-content",
  "apex-content",
  "carcano-content",
  "moment-content",
  "opsm1-content",
  "sigma-interface-content",
  "prismatic-haze-content",
  "disentombed-content",
  "innards-content",
  "overtime-content",
  "goldcrest-palace-content",
  "n0-content",
  "remember-content",
  "cave-of-heart-content",
  "aftermath-content",
  "cluttered-confusion-content",
  "triple-six-content",
  "digital-disarray-content",
  "malevolent-maelstrom-content",
  "chopstep-content",
  "frozen-content",
  "shatter-content",
  "redemption-arc-content",
  "want-me-content",
  "eternal-content",
  "niflheim-content",
  "sorryforpartyrocking-content",
  "idols-content",
  "agen-wida-content",
  "deflective-content",
  "elliptic-curve-content",
  "u235-content",
  "dance-til-dawn-content",
  "sarthix-content",
  "welcome-to-gd-news-content",
  "smartish-mode-content",
  "brainrot-content",
  "totem-content",
  "minimum-content",
  "myocardia-content",
  "novalis-content",
  "karma-content",
  "heat-wave-content",
  "aux-cord-content",
  "manic-machine-content",
  "cat-planet-content",
  "twisted-tranquility-content",
  "concaved-memories-content",
  "wind-storm-content",
  "daydream-content",
  "brownoix-content",
  "empyrean-content",
  "mirage-content",
  "red-world-rebirth-content",
  "headlock-content",
  "cerebral-hemorrhage-content",
  "inflammable-infusion-content",
  "loop-content",
  "tech-manifestation-content",
  "reanimate-content",
  "cupid-content",
  "doop-content",
  "tornado-content",
  "reflective-content",
  "crowd-control-content",
  "lotus-content",
  "ferrum-frenzy-content",
  "reverence-content",
  "dismay-content",
  "i-never-dream-content",
  "any-percent-content",
  "cerebral-torment-content",
  "ballistic-funk-content",
  "niflhel-content",
  "sunburn-content",
  "zettabyte-content",
  "napalm-content",
  "draco-meteor-content",
  "artificial-dream-content",
  "impasse-content",
  "necropolix-content",
  "hurricane-content",
  "dismal-duststorm-content",
  "snowdrift-content",
  "retention-content",
  "meltdown-content",
  "broken-signal-content",
  "hopping-over-puddles-content",
  "unearthed-content",
  "sky-tech-content",
  "the-ultimate-phase-content",
  "awakening-horus-content",
  "acropolix-content",
  "deception-dive-content",
  "party-rock-anthem-content",
  "ultrasans-content",
  "phantasmagoria-content",
  "lights-out-content",
  "voided-content",
  "hypersonic-content",
];

// Check if buttonIds and contentIds are the same length
if (buttonIds.length !== contentIds.length) {
  console.error("Button IDs and Content IDs must have the same length.");
}

document.addEventListener("DOMContentLoaded", function () {
  // Function to switch tabs
  function switchTab(buttonId, contentId) {
    // Hide all content
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

    if (!contentId) {
      console.error(`No content ID found for button ID "${buttonId}" at index ${index}.`);
    }
  });

  // Select all iframe elements and prepare for lazy loading
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach((iframe) => {
    if (iframe.hasAttribute('src')) {
      iframe.setAttribute('data-src', iframe.getAttribute('src'));
      iframe.removeAttribute('src');
      iframe.classList.add('lazy-video');
    }
  });

  // Lazy Video Loading
  const lazyVideos = document.querySelectorAll('.lazy-video');
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          video.setAttribute('src', video.getAttribute('data-src'));
          observer.unobserve(video);
        }
      });
    });

    lazyVideos.forEach(video => {
      videoObserver.observe(video);
    });
  } else {
    // Fallback: Load videos without IntersectionObserver
    lazyVideos.forEach(video => {
      video.setAttribute('src', video.getAttribute('data-src'));
    });
  }
});
