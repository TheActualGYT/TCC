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
    "sigma-interface-content", "prismatic-haze-content", "carcano-content",
    "moment-content", "disentombed-content", "innards-content",
    "overtime-content", "goldcrest-palace-content", "n0-content",
    "remember-content", "cave-of-heart-content", "cluttered-confusion-content",
    "triple-six-content", "digital-disarray-content", "aftermath-content",
    "malevolent-maelstrom-content", "chopstep-content", "frozen-content",
    "shatter-content", "redemption-arc-content", "want-me-content",
    "eternal-content", "sorryforpartyrocking-content", "niflheim-content",
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
    "sigma-interface-btn", "prismatic-haze-btn", "carcano-btn",
    "moment-btn", "disentombed-btn", "innards-btn",
    "overtime-btn", "goldcrest-palace-btn", "n0-btn",
    "remember-btn", "cave-of-heart-btn", "cluttered-confusion-btn",
    "triple-six-btn", "digital-disarray-btn", "aftermath-btn",
    "malevolent-maelstrom-btn", "chopstep-btn", "frozen-btn",
    "shatter-btn", "redemption-arc-btn", "want-me-btn",
    "eternal-btn", "sorryforpartyrocking-btn", "niflheim-btn", "idols-btn"
  ];

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

document.getElementById("sink-btn").addEventListener("click", () => switchTab("sink-btn", "sink-content")); // #1
document.getElementById("nightshade-btn").addEventListener("click", () => switchTab("nightshade-btn", "nightshade-content")); // #2
document.getElementById("timor-btn").addEventListener("click", () => switchTab("timor-btn", "timor-content")); // #3
document.getElementById("the-moon-below-btn").addEventListener("click", () => switchTab("the-moon-below-btn", "the-moon-below-content")); // #4
document.getElementById("lucid-chaos-btn").addEventListener("click", () => switchTab("lucid-chaos-btn", "lucid-chaos-content")); // #5
document.getElementById("butiti-iii-btn").addEventListener("click", () => switchTab("butiti-iii-btn", "butiti-iii-content")); // #6
document.getElementById("confusion-btn").addEventListener("click", () => switchTab("confusion-btn", "confusion-content")); // #7
document.getElementById("stalemate-redux-btn").addEventListener("click", () => switchTab("stalemate-redux-btn", "stalemate-redux-content")); // #8
document.getElementById("killbot-btn").addEventListener("click", () => switchTab("killbot-btn", "killbot-content")); // #9
document.getElementById("omicron-btn").addEventListener("click", () => switchTab("omicron-btn", "omicron-content")); // #10
document.getElementById("polygonal-paradox-btn").addEventListener("click", () => switchTab("polygonal-paradox-btn", "polygonal-paradox-content")); // #11
document.getElementById("neurostasis-btn").addEventListener("click", () => switchTab("neurostasis-btn", "neurostasis-content")); // #12
document.getElementById("black-blizzard-btn").addEventListener("click", () => switchTab("black-blizzard-btn", "black-blizzard-content")); // #13
document.getElementById("berserk-btn").addEventListener("click", () => switchTab("berserk-btn", "berserk-content")); // #14
document.getElementById("hyper-paradox-btn").addEventListener("click", () => switchTab("hyper-paradox-btn", "hyper-paradox-content")); // #15
document.getElementById("dmg-ctrl-btn").addEventListener("click", () => switchTab("dmg-ctrl-btn", "dmg-ctrl-content")); // #16
document.getElementById("balengu-vortex-btn").addEventListener("click", () => switchTab("balengu-vortex-btn", "balengu-vortex-content")); // #17
document.getElementById("the-cellar-path-btn").addEventListener("click", () => switchTab("the-cellar-path-btn", "the-cellar-path-content")); // #18
document.getElementById("ruber-cash-22-btn").addEventListener("click", () => switchTab("ruber-cash-22-btn", "ruber-cash-22-content")); // #19
document.getElementById("worse-trip-btn").addEventListener("click", () => switchTab("worse-trip-btn", "worse-trip-content")); // #20
document.getElementById("subsonic-btn").addEventListener("click", () => switchTab("subsonic-btn", "subsonic-content")); // #21
document.getElementById("dolos-btn").addEventListener("click", () => switchTab("dolos-btn", "dolos-content")); // #22
document.getElementById("the-sulpher-sea-btn").addEventListener("click", () => switchTab("the-sulpher-sea-btn", "the-sulpher-sea-content")); // #23
document.getElementById("rash-btn").addEventListener("click", () => switchTab("rash-btn", "rash-content")); // #24
document.getElementById("ithacropolis-btn").addEventListener("click", () => switchTab("ithacropolis-btn", "ithacropolis-content")); // #25
document.getElementById("endless-dream-btn").addEventListener("click", () => switchTab("endless-dream-btn", "endless-dream-content")); // #26
document.getElementById("speedrun-btn").addEventListener("click", () => switchTab("speedrun-btn", "speedrun-content")); // #27
document.getElementById("darkened-btn").addEventListener("click", () => switchTab("darkened-btn", "darkened-content")); // #28
document.getElementById("removed-submission-btn").addEventListener("click", () => switchTab("removed-submission-btn", "removed-submission-content")); // #29
document.getElementById("xuser-morelike-luser-btn").addEventListener("click", () => switchTab("xuser-morelike-luser-btn", "xuser-morelike-luser-content")); // #30
document.getElementById("devoid-btn").addEventListener("click", () => switchTab("devoid-btn", "devoid-content")); // #31
document.getElementById("le-midd-mapperoonies-btn").addEventListener("click", () => switchTab("le-midd-mapperoonies-btn", "le-midd-mapperoonies-content")); // #32
document.getElementById("hot-rod-btn").addEventListener("click", () => switchTab("hot-rod-btn", "hot-rod-content")); // #33
document.getElementById("coolie-mazie-paloozi-btn").addEventListener("click", () => switchTab("coolie-mazie-paloozi-btn", "coolie-mazie-paloozi-content")); // #34
document.getElementById("falcon16-btn").addEventListener("click", () => switchTab("falcon16-btn", "falcon16-content")); // #35
document.getElementById("miss-you-btn").addEventListener("click", () => switchTab("miss-you-btn", "miss-you-content")); // #36
document.getElementById("blade-of-justice-btn").addEventListener("click", () => switchTab("blade-of-justice-btn", "blade-of-justice-content")); // #37
document.getElementById("biohazard-btn").addEventListener("click", () => switchTab("biohazard-btn", "biohazard-content")); // #38
document.getElementById("artifice-btn").addEventListener("click", () => switchTab("artifice-btn", "artifice-content")); // #39
document.getElementById("protoflicker-btn").addEventListener("click", () => switchTab("protoflicker-btn", "protoflicker-content")); // #40
document.getElementById("anahita-btn").addEventListener("click", () => switchTab("anahita-btn", "anahita-content")); // #41
document.getElementById("bloodbath-btn").addEventListener("click", () => switchTab("bloodbath-btn", "bloodbath-content")); // #42
document.getElementById("ecstasy-btn").addEventListener("click", () => switchTab("ecstasy-btn", "ecstasy-content")); // #43
document.getElementById("oopz-btn").addEventListener("click", () => switchTab("oopz-btn", "oopz-content")); // #44
document.getElementById("cytokinesis-btn").addEventListener("click", () => switchTab("cytokinesis-btn", "cytokinesis-content")); // #45
document.getElementById("motorbreath-btn").addEventListener("click", () => switchTab("motorbreath-btn", "motorbreath-content")); // #46
document.getElementById("gewerbix-btn").addEventListener("click", () => switchTab("gewerbix-btn", "gewerbix-content")); // #47
document.getElementById("molten-mercury-btn").addEventListener("click", () => switchTab("molten-mercury-btn", "molten-mercury-content")); // #48
document.getElementById("apex-btn").addEventListener("click", () => switchTab("apex-btn", "apex-content")); //#49
document.getElementById("opsm1-btn").addEventListener("click", () => switchTab("opsm1-btn", "opsm1-content")); // #50
document.getElementById("sigma-interface-btn").addEventListener("click", () => switchTab("sigma-interface-btn", "sigma-interface-content")); // #51
document.getElementById("prismatic-haze-btn").addEventListener("click", () => switchTab("prismatic-haze-btn", "prismatic-haze-content")); // #52
document.getElementById("carcano-btn").addEventListener("click", () => switchTab("carcano-btn", "carcano-content")); // #53
document.getElementById("moment-btn").addEventListener("click", () => switchTab("moment-btn", "moment-content")); // #54
document.getElementById("disentombed-btn").addEventListener("click", () => switchTab("disentombed-btn", "disentombed-content")); // #55
document.getElementById("innards-btn").addEventListener("click", () => switchTab("innards-btn", "innards-content")); // #56
document.getElementById("overtime-btn").addEventListener("click", () => switchTab("overtime-btn", "overtime-content")); // #57
document.getElementById("goldcrest-palace-btn").addEventListener("click", () => switchTab("goldcrest-palace-btn", "goldcrest-palace-content")); // #58
document.getElementById("n0-btn").addEventListener("click", () => switchTab("n0-btn", "n0-content")); // #59
document.getElementById("remember-btn").addEventListener("click", () => switchTab("remember-btn", "remember-content")); // #60
document.getElementById("cave-of-heart-btn").addEventListener("click", () => switchTab("cave-of-heart-btn", "cave-of-heart-content")); // #61
document.getElementById("cluttered-confusion-btn").addEventListener("click", () => switchTab("cluttered-confusion-btn", "cluttered-confusion-content")); // #62
document.getElementById("triple-six-btn").addEventListener("click", () => switchTab("triple-six-btn", "triple-six-content")); // #63
document.getElementById("digital-disarray-btn").addEventListener("click", () => switchTab("digital-disarray-btn", "digital-disarray-content")); // #64
document.getElementById("aftermath-btn").addEventListener("click", () => switchTab("aftermath-btn", "aftermath-content")); // #65
document.getElementById("malevolent-maelstrom-btn").addEventListener("click", () => switchTab("malevolent-maelstrom-btn", "malevolent-maelstrom-content")); // #66
document.getElementById("chopstep-btn").addEventListener("click", () => switchTab("chopstep-btn", "chopstep-content")); // #67
document.getElementById("frozen-btn").addEventListener("click", () => switchTab("frozen-btn", "frozen-content")); // #68
document.getElementById("shatter-btn").addEventListener("click", () => switchTab("shatter-btn", "shatter-content")); // #69
document.getElementById("redemption-arc-btn").addEventListener("click", () => switchTab("redemption-arc-btn", "redemption-arc-content")); // #70
document.getElementById("want-me-btn").addEventListener("click", () => switchTab("want-me-btn", "want-me-content")); // #71
document.getElementById("eternal-btn").addEventListener("click", () => switchTab("eternal-btn", "eternal-content")); // #72
document.getElementById("sorryforpartyrocking-btn").addEventListener("click", () => switchTab("sorryforpartyrocking-btn", "sorryforpartyrocking-content")); // #73
document.getElementById("niflheim-btn").addEventListener("click", () => switchTab("niflheim-btn", "niflheim-content")); // #74
document.getElementById("idols-btn").addEventListener("click", () => switchTab("idols-btn", "idols-content")); // #75
