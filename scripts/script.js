// MAIN BUTTONS SWITCH
const logo = document.getElementById("logo");
const sectionSwitch = document.getElementById("switch");
const switchText = document.getElementById("switchText");
const homeButton = document.getElementById("homeButton");
const homeSection = document.getElementById("homeSection");
const skillsButton = document.getElementById("skillsButton");
const skillsSection = document.getElementById("skillsSection");
const portfolioButton = document.getElementById("portfolioButton");
const altPortfolioButton = document.getElementById("altPortfolioButton");
const portfolioSection = document.getElementById("portfolioSection");
const numbersButton = document.getElementById("numbersButton");
const numbersSection = document.getElementById("numbersSection");
const contactButton = document.getElementById("contactButton");
const altContactButton = document.getElementById("altContactButton");
const contactSection = document.getElementById("contactSection");
const dismiss = document.getElementById("dismiss");
const container = document.getElementById("container");
const navbarSocial = document.getElementById("navbarSocial");
const contactIcons = document.getElementById("contactIcons");
const privacyButton = document.getElementById("privacyButton");
const privacySection = document.getElementById("privacySection");
const easterEggButton = document.getElementById("easterEggButton");
const easterEggSection = document.getElementById("easterEggSection");

const sections = [
  { button: homeButton, section: homeSection },
  { button: skillsButton, section: skillsSection },
  { button: portfolioButton, section: portfolioSection },
  { button: numbersButton, section: numbersSection },
  { button: contactButton, section: contactSection },
  { button: privacyButton, section: privacySection },
  // { button: easterEggButton, section: easterEggSection },
];

const switchMessages = [
  "Working on it",
  "Rendering the section for you",
  "Updating page",
  "Processing request",
  "Retrieving page",
];

function deactivate() {
  sections.forEach((section) => {
    section.button.classList.add("unclickable");
    section.button.classList.remove("active-item");
    setTimeout(() => {
      section.section.classList.add("invisible");
    }, 500);
    setTimeout(() => {
      section.button.classList.remove("unclickable");
    }, 1200);
  });
}

function rotateLogo() {
  logo.classList.add("rotate");
  setTimeout(() => {
    logo.classList.remove("rotate");
  }, 900);
}

function contactMode() {
  if (contactButton.classList.contains("active-item")) {
    setTimeout(() => {
      navbarSocial.classList.add("invisible2");
      setTimeout(() => {
        navbarSocial.classList.add("invisible");
      }, 1000);
      contactIcons.classList.remove("invisible2");
    }, 2000);
  } else {
    setTimeout(() => {
      navbarSocial.classList.remove("invisible");
      navbarSocial.classList.remove("invisible2");
      contactIcons.classList.add("invisible2");
    }, 2100);
  }
}

sections.forEach((element) => {
  element.button.addEventListener("click", () => {
    sectionSwitch.classList.add("section-switch");
    let randomMessage =
      switchMessages[Math.floor(Math.random() * switchMessages.length)];
    switchText.innerHTML = randomMessage;
    rotateLogo();
    deactivate();
    element.button.classList.add("active-item");
    setTimeout(() => {
      element.section.classList.remove("invisible");
    }, 500);
    setTimeout(() => {
      sectionSwitch.classList.remove("section-switch");
    }, 1200);
    contactMode();
  });
});

altPortfolioButton.addEventListener("click", () => {
  sectionSwitch.classList.add("section-switch");
  let randomMessage =
    switchMessages[Math.floor(Math.random() * switchMessages.length)];
  switchText.innerHTML = randomMessage;
  rotateLogo();
  deactivate();
  portfolioButton.classList.add("active-item");
  setTimeout(() => {
    portfolioSection.classList.remove("invisible");
  }, 500);
  setTimeout(() => {
    sectionSwitch.classList.remove("section-switch");
  }, 1200);
});

altContactButton.addEventListener("click", () => {
  sectionSwitch.classList.add("section-switch");
  let randomMessage =
    switchMessages[Math.floor(Math.random() * switchMessages.length)];
  switchText.innerHTML = randomMessage;
  rotateLogo();
  deactivate();
  contactButton.classList.add("active-item");
  setTimeout(() => {
    contactSection.classList.remove("invisible");
  }, 500);
  setTimeout(() => {
    sectionSwitch.classList.remove("section-switch");
  }, 1200);
  contactMode();
});

function altPrivacyButtons() {
  sectionSwitch.classList.add("section-switch");
  let randomMessage =
    switchMessages[Math.floor(Math.random() * switchMessages.length)];
  switchText.innerHTML = randomMessage;
  rotateLogo();
  deactivate();
  setTimeout(() => {
    privacySection.classList.remove("invisible");
  }, 500);
  setTimeout(() => {
    sectionSwitch.classList.remove("section-switch");
  }, 1200);
  contactMode();
}

// dismiss.addEventListener("click", () => {
//   numbersSection.classList.add("dismiss");

//   setTimeout(() => {
//     sectionSwitch.classList.add("section-switch");
//     switchText.innerHTML = "Nothing to see here";
//     rotateLogo();
//     deactivate();
//     numbersButton.classList.add("active-item");
//     setTimeout(() => {
//       numbersSection.classList.remove("invisible");
//     }, 500);
//     setTimeout(() => {
//       sectionSwitch.classList.remove("section-switch");
//     }, 1200);
//   }, 3600);
//   setTimeout(() => {
//     numbersSection.classList.remove("dismiss");
//   }, 5000);
// });

// CLOSE SUPPORT TEXT
const closeSupported = document.getElementById("closeSupported");
const supportText = document.getElementById("supportText");
closeSupported.addEventListener("click", () => {
  supportText.style.display = "none";
});

// DESTROYABLE TEXT
const multiShade = Array.from(document.getElementsByClassName("multiShade"));
const yeet = Array.from(document.getElementsByClassName("yeet"));

multiShade.forEach((char) => {
  char.addEventListener("mouseover", () => {
    let hue = Math.floor(Math.random() * 255);
    char.style.color = `rgb(${hue},${hue},${hue})`;
  });
});
yeet.forEach((char) => {
  char.addEventListener("mouseover", () => {
    let hueR = Math.floor(Math.random() * 255);
    let hueG = Math.floor(Math.random() * 255);
    let hueB = Math.floor(Math.random() * 255);
    char.style.color = `rgb(${hueR},${hueG},${hueB})`;
    char.style.transition = `0.2s`;
    let targetX = Math.random() * 1000 - 500;
    let targetY = Math.random() * 1000 - 500;
    char.style.transform = `translate(${targetX}px,${targetY}px)`;
    setTimeout(() => {
      char.style.transition = "3s";
      char.style.color = `#ddd`;
      char.style.transform = `none`;
    }, 500);
  });
});

// SKILLS SECTION
const aboutButton = document.getElementById("aboutButton");
const aboutSkill = document.getElementById("aboutSkill");
const programmingButton = document.getElementById("programmingButton");
const programmingSkill = document.getElementById("programmingSkill");
const designButton = document.getElementById("designButton");
const designSkill = document.getElementById("designSkill");
const dataButton = document.getElementById("dataButton");
const dataSkill = document.getElementById("dataSkill");
const businessButton = document.getElementById("businessButton");
const businessSkill = document.getElementById("businessSkill");
const languageButton = document.getElementById("languageButton");
const languageSkill = document.getElementById("languageSkill");
const achievementButton = document.getElementById("achievementButton");
const achievementSkill = document.getElementById("achievementSkill");
const moreButton = document.getElementById("othersButton");
const moreIcon = document.getElementById("othersIcon");

const skills = [
  { button: aboutButton, skill: aboutSkill },
  { button: programmingButton, skill: programmingSkill },
  { button: designButton, skill: designSkill },
  { button: dataButton, skill: dataSkill },
  { button: businessButton, skill: businessSkill },
  { button: languageButton, skill: languageSkill },
  { button: achievementButton, skill: achievementSkill },
];

function deactivate2() {
  skills.forEach((skill2) => {
    skill2.button.classList.remove("active-skill");
    skill2.skill.classList.add("invisible");
  });
}

skills.forEach((skill) => {
  skill.button.addEventListener("click", () => {
    deactivate2();
    skill.button.classList.add("active-skill");
    skill.skill.classList.remove("invisible");
  });
});

let o = 0;
moreButton.addEventListener("click", () => {
  if (o == 0) {
    dataButton.classList.remove("hidden-skill");
    businessButton.classList.remove("hidden-skill");
    languageButton.classList.remove("hidden-skill");
    achievementButton.classList.remove("hidden-skill");
    moreIcon.setAttribute(
      "xlink:href",
      "assets/symbol-defs.svg#icon-minus-solid"
    );
    o++;
  } else {
    dataButton.classList.add("hidden-skill");
    businessButton.classList.add("hidden-skill");
    languageButton.classList.add("hidden-skill");
    achievementButton.classList.add("hidden-skill");
    moreIcon.setAttribute(
      "xlink:href",
      "assets/symbol-defs.svg#icon-add_circle"
    );
    o = 0;
  }
});

// PORTFOLIO SECTION
let projectsArray = [];
const portfolioArea = document.getElementById("portfolioArea");

class Project {
  constructor(
    title,
    description,
    image,
    urllive,
    urlcode,
    techs,
    tags,
    code,
    live,
    color,
    featured
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.urllive = urllive;
    this.urlcode = urlcode;
    this.techs = techs;
    this.tags = tags;
    this.code = code;
    this.live = live;
    this.color = color;
    this.featured = featured;
    Project.addInstance(this);
  }
  static addInstance(item) {
    projectsArray.push(item);
  }
  static getInstances() {
    return projectsArray;
  }
  static clearInstances() {
    projectsArray.length = 0;
  }
}

// const project1 = new Project(
//   "Page Ideas",
//   "An aggregator of pages with different designs to inspire production (under continuous development)",
//   "assets/portfolio/Page-Ideas.png",
//   "https://sergie-aga.github.io/Page_ideas/",
//   "https://github.com/Sergie-AGA/Page_ideas",
//   [
//     {
//       label: "Visual",
//       text: "CSS3 | SASS | Animations",
//     },
//     {
//       label: "Programming",
//       text: "Javascript | OOP | ES6+",
//     },
//     {
//       label: "Extra Assets",
//       text: "Figma | BEM CSS",
//     },
//   ],
//   [
//     "HTML",
//     "CSS",
//     "SASS",
//     "Animations",
//     "Javascript",
//     "ES6+",
//     "Figma",
//     "Royalty-free",
//   ],
//   true,
//   true,
//   "darkblue",
//   false
// );

const project2 = new Project(
  "Manage Global",
  "Mockup of a fictional business brochure of an app-based company that provides business solutions. It uses Bootstrap and jQuery.",
  "assets/portfolio/manage-global.png",
  "https://sergie-aga.github.io/vanilla-apps/manage_global/index.html",
  "https://github.com/Sergie-AGA/vanilla-apps/tree/main/manage_global",
  [
    {
      label: "Visual",
      text: "CSS3 | Bootstrap 4.5 | Animations",
    },
    {
      label: "Programming",
      text: "jQuery | ES6+ | RegEx",
    },
    {
      label: "Extra Assets",
      text: "Photoshop | External libs",
    },
  ],
  [
    "CSS",
    "Bootstrap",
    "Animations",
    "ES6+",
    "jQuery",
    "Royalty-free resources",
    "Photoshop",
    "RegEx",
  ],
  true,
  true,
  "purple",
  false
);

const project3 = new Project(
  "Personal Portfolio",
  "This very site you are looking at now. A personal site and portfolio to showcase my projects. It is all coded in Vanilla JS with SASS.",
  "assets/portfolio/portfolio-sergie.png",
  "#",
  "#",
  [
    {
      label: "Visual",
      text: "CSS3 | SASS | Animations",
    },
    {
      label: "Programming",
      text: "Javascript | OOP | ES6+",
    },
    {
      label: "Extra Assets",
      text: "Photoshop | BEM CSS | NPM / Yarn",
    },
  ],
  [
    "HTML",
    "CSS",
    "SASS",
    "Animations",
    "Javascript",
    "Vanilla JS",
    "ES6+",
    "Royalty-free",
    "Photoshop",
    "NPM / Yarn"
  ],
  false,
  false,
  "black",
  false
);

const project4 = new Project(
  "API Sea",
  "Project that aggregates different API's and shows with examples what can be done with them (under continuous development).",
  "assets/portfolio/api-sea.png",
  "https://api-sea-by-sieger.herokuapp.com/",
  "https://github.com/Sergie-AGA/API-Sea-Github-version",
  [
    {
      label: "Visual",
      text: "CSS3 | SASS | Animations",
    },
    {
      label: "Programming Client-Side",
      text: "Javascript | OOP | ES6+ ",
    },
    {
      label: "Programming Server-side",
      text: "Node JS | Express JS | API's | NPM/Yarn",
    },
  ],
  [
    "CSS",
    "SASS",
    "Animations",
    "Javascript",
    "Vanilla JS",
    "ES6+",
    "Royalty-free resources",
    "Node JS",
    "Express JS",
    "API's",
    "NPM / Yarn",
    "Heroku",
  ],
  true,
  true,
  "lightblue",
  false
);

const project5 = new Project(
  "Custom Sticky Notes",
  "Mini app that lets you create sticky notes with customizable fields. Changes are saved to local storage.",
  "assets/portfolio/custom-sticky-notes.png",
  "https://sergie-aga.github.io/vanilla-apps/custom-sticky-notes/index.html",
  "https://github.com/Sergie-AGA/vanilla-apps",
  [
    {
      label: "Visual",
      text: "CSS3 | SASS | Animations",
    },
    {
      label: "Programming",
      text: "Javascript | OOP | ES6+",
    },
    {
      label: "Extra Assets",
      text: "Local Storage | BEM CSS",
    },
  ],
  [
    "CSS",
    "SASS",
    "Animations",
    "Javascript",
    "Vanilla JS",
    "OOP",
    "ES6+",
    "Royalty-free resources",
  ],
  true,
  true,
  "yellow",
  false
);

// const project6 = new Project(
//   "Mini Apps",
//   "A React JS-based aggregator of small applications aimed at exploring different web development functionalities to inspire ideas (under continuous development).",
//   "assets/portfolio/mini-apps.png",
//   "https://mini-apps-by-sieger.netlify.app/",
//   "https://github.com/Sergie-AGA/Mini_Apps",
//   [
//     {
//       label: "Visual",
//       text: "React JS + Hooks | CSS3 | SASS",
//     },
//     {
//       label: "Programming",
//       text: "Javascript with React JS | OOP | ES6+",
//     },
//     {
//       label: "Extra Assets",
//       text: "Netlify | BEM CSS",
//     },
//   ],
//   [
//     "CSS",
//     "React JS",
//     "SASS",
//     "Animations",
//     "Javascript",
//     "OOP",
//     "ES6+",
//     "Netlify",
//   ],
//   true,
//   true,
//   "green",
//   false
// );

// const project7 = new Project(
//   "Marketing Website",
//   "A multilingual WordPress website for a client's business, expanding on his previous site. It uses major modern plugins for handling edition, SEO, custom styling, security, cache and more",
//   "assets/portfolio/pita-website.jpg",
//   "https://bernardompita.com",
//   "https://github.com/Sergie-AGA/",
//   [
//     {
//       label: "Appearance",
//       text: "Astra Theme + Widgets | CSS3 + Javascript | Gutenberg + Addons",
//     },
//     {
//       label: "Major features",
//       text:
//         "Security plugin | Multilingual | Cache | SEO plugin | Cookie and privacy handling | Backups | Others ",
//     },
//   ],
//   ["CSS", "Javascript", "Vanilla JS", "WordPress"],
//   false,
//   true,
//   "red",
//   true
// );

const project8 = new Project(
  "Marketing Interactive tools",
  "Set of interactive marketing tools with multilingual support developed in React JS, based on the client's tools.",
  "assets/portfolio/pita-marketing-tools.png",
  "https://marketing-tools.netlify.app/",
  "https://github.com/Sergie-AGA/",
  [
    {
      label: "Visual",
      text: "React JS + Hooks | CSS3 | SASS | RegEx",
    },
    {
      label: "Programming",
      text: "React JS | Express JS | Node JS",
    },
    {
      label: "Extra Assets",
      text: "Netlify | BEM CSS",
    },
  ],
  [
    "CSS",
    "React JS",
    "SASS",
    "Animations",
    "Javascript",
    "ES6+",
    "Node JS",
    "Express JS",
    "NPM / Yarn",
    "Netlify",
    "RegEx",
  ],
  false,
  true,
  "green",
  true
);

const project9 = new Project(
  "Business Website",
  "Partnering with a designer, we created a modern-looking website for a client's business. It has features to handle all the components desired by the client, such as SEO, security, cache and more.",
  "assets/portfolio/edicopia.jpg",
  "https://edicopia.pt",
  "https://github.com/Sergie-AGA/",
  [
    {
      label: "Appearance",
      text: "Custom CSS3 + Javascript | Building plugins",
    },
    {
      label: "Major features",
      text: "Functionalities to handle security, backups, cache, SEO, cookies and others",
    },
  ],
  ["CSS", "Javascript", "Vanilla JS", "WordPress"],
  false,
  true,
  "darkblue",
  true
);

const project10 = new Project(
  "Business Tools",
  "A set of tools made for a client where the user inputs some data and receives back more details on a desired service. Details are confidential.",
  "assets/portfolio/question1.jpg",
  "https://google.com",
  "https://github.com/Sergie-AGA/",
  [
    {
      label: "Appearance",
      text: "Custom CSS3 + Javascript | WordPress",
    },
    {
      label: "Major features",
      text: "Data is stored into JavaScript objects and serves the necessary assets matching the requirements provided by the user",
    },
  ],
  ["CSS", "Javascript", "Vanilla JS", "WordPress"],
  false,
  false,
  "orange",
  false
);

const project11 = new Project(
  "Advertising Tools",
  "Tools designed for a company to speed up the creation of ads in Google Ads and Microsoft Ads by over 2 times, based on their strategy. Details are confidential.",
  "assets/portfolio/question2.jpg",
  "https://google.com",
  "https://github.com/Sergie-AGA/",
  [
    {
      label: "Visual",
      text: "Custom CSS3 | SASS",
    },
    {
      label: "Programming",
      text: "JavaScript | jQuery | ES6+",
    },
    {
      label: "Extra Assets",
      text: "BEM CSS | NPM / Yarn",
    },
  ],
  ["CSS", "Javascript", "jQuery", "ES6+", "NPM / Yarn"],
  false,
  false,
  "red",
  false
);

// const project14 = new Project(
//   "Advanced CV (POC)",
//   'A Next JS tool that allows the creation of different visualizations of a Curriculum. This is a "proof of concept" version.',
//   "assets/portfolio/pita-marketing-tools.png",
//   "https://marketing-tools.netlify.app/",
//   "https://github.com/Sergie-AGA/",
//   [
//     {
//       label: "Visual",
//       text: "SASS | Materialize CSS | Figma",
//     },
//     {
//       label: "Programming",
//       text: "Next JS | React JS | TypeScript",
//     },
//     {
//       label: "Extra Assets",
//       text: "Vercel | Mock API | Google Ads",
//     },
//   ],
//   [
//     "CSS",
//     "SASS",
//     "Materialize CSS",
//     "React JS",
//     "Next JS",
//     "TypeScript",
//     "ES6+",
//     "API's",
//     "NPM / Yarn",
//     "Vercel",
//     "Google Ads",
//     "Figma",
//   ],
//   false,
//   true,
//   "lightblue",
//   true
// );

let portfolio = projectsArray;

function generateCards() {
  portfolioArea.innerHTML = "";
  portfolio.sort((a, b) => (a.featured > b.featured ? -1 : 1));

  portfolio.forEach((project) => {
    let card = document.createElement("div");
    card.classList.add("card", `card--${project.color}`);

    let cardFront = document.createElement("div");
    cardFront.classList.add("card__side", "card__side--front");

    let cardImage = document.createElement("div");
    cardImage.classList.add("card__image");
    let cardImageImg = document.createElement("img");
    cardImageImg.setAttribute("src", project.image);
    cardImageImg.setAttribute("alt", "image of the project");
    cardImage.appendChild(cardImageImg);

    let cardDescription = document.createElement("div");
    cardDescription.classList.add("card__description");
    let cardDescriptionText = document.createTextNode(project.description);
    cardDescription.appendChild(cardDescriptionText);

    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card__title");
    let cardTitleText = document.createTextNode(project.title);
    cardTitle.appendChild(cardTitleText);

    let cardFeatured = "";
    if (project.featured) {
      cardFeatured = document.createElement("div");
      cardFeatured.classList.add("card__featured");
      let featuredLayer = document.createElement("div");
      featuredLayer.classList.add("card__featured__layer");
      cardFeatured.appendChild(featuredLayer);
      featuredLayer.innerText = "FEATURED";
    }

    cardFront.appendChild(cardImage);
    cardFront.appendChild(cardDescription);
    cardFront.appendChild(cardTitle);
    if (cardFeatured !== "") cardFront.appendChild(cardFeatured);

    let cardBack = document.createElement("div");
    cardBack.classList.add("card__side", "card__side--back");

    let cardTechs = document.createElement("div");
    cardTechs.classList.add("card__techs");
    project.techs.forEach((tech) => {
      let techItem = document.createElement("div");
      techItem.classList.add("card__techs__item");

      let techLabel = document.createElement("h3");
      techLabel.classList.add("card__techs__item__label");
      let labelText = document.createTextNode(tech.label);
      techLabel.appendChild(labelText);

      let techText = document.createElement("p");
      techText.classList.add("card__techs__item__text");
      let textText = document.createTextNode(tech.text);
      techText.appendChild(textText);

      techItem.appendChild(techLabel);
      techItem.appendChild(techText);
      cardTechs.appendChild(techItem);
    });

    cardTechs.addEventListener("touchstart", () => {
      cardFront.style.display = "block";
    });

    let cardButtons = document.createElement("div");
    cardButtons.classList.add("card__buttons");
    let i = 0;
    if (project.code == true) {
      let codeButton = document.createElement("a");
      codeButton.classList.add("card__buttons__links");
      codeButton.setAttribute("href", project.urlcode);
      codeButton.setAttribute("target", "_blank");

      let codeIcon = document.createElement("i");
      codeIcon.classList.add(
        "fab",
        "fa-github-square",
        "card__buttons__links__icon1"
      );

      let codeText = document.createElement("p");
      codeText.classList.add("card__buttons__links__text");
      let codeTextNode = document.createTextNode("Source Code");
      codeText.appendChild(codeTextNode);

      codeButton.appendChild(codeIcon);
      codeButton.appendChild(codeText);
      cardButtons.appendChild(codeButton);
      i++;
    }
    if (project.live == true) {
      let liveButton = document.createElement("a");
      liveButton.classList.add("card__buttons__links");
      liveButton.setAttribute("href", project.urllive);
      liveButton.setAttribute("target", "_blank");

      let liveIcon = document.createElement("i");
      liveIcon.classList.add(
        "fas",
        "fa-laptop-code",
        "card__buttons__links__icon2"
      );

      let liveText = document.createElement("p");
      liveText.classList.add("card__buttons__links__text");
      let liveTextNode = document.createTextNode("Visit");
      liveText.appendChild(liveTextNode);

      liveButton.appendChild(liveIcon);
      liveButton.appendChild(liveText);
      cardButtons.appendChild(liveButton);
      i++;
    }
    if (i == 0) {
      let fail = document.createElement("p");
      fail.classList.add("section__text");
      let failText = document.createTextNode(
        "No demonstration is available for this project"
      );
      fail.appendChild(failText);
      cardButtons.appendChild(fail);
    }

    cardBack.appendChild(cardTechs);
    cardBack.appendChild(cardButtons);

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    cardFront.addEventListener("touchstart", () => {
      cardFront.style.WebkitTransform = "rotateY(-180deg)";
      cardFront.style.mozTransform = "rotateY(-180deg)";
      cardFront.style.msTransform = "rotateY(-180deg)";
      cardFront.style.oTransform = "rotateY(-180deg)";
      cardBack.style.WebkitTransform = "rotateY(0)";
      cardBack.style.mozTransform = "rotateY(0)";
      cardBack.style.msTransform = "rotateY(0)";
      cardBack.style.oTransform = "rotateY(0)";
    });
    cardBack.addEventListener("touchstart", () => {
      cardBack.style.WebkitTransform = "rotateY(180deg)";
      cardBack.style.mozTransform = "rotateY(180deg)";
      cardBack.style.msTransform = "rotateY(180deg)";
      cardBack.style.oTransform = "rotateY(180deg)";
      cardFront.style.WebkitTransform = "rotateY(0)";
      cardFront.style.mozTransform = "rotateY(0)";
      cardFront.style.msTransform = "rotateY(0)";
      cardFront.style.oTransform = "rotateY(0)";
    });
    cardFront.addEventListener("mouseover", () => {
      cardFront.style.WebkitTransform = "rotateY(-180deg)";
      cardFront.style.mozTransform = "rotateY(-180deg)";
      cardFront.style.msTransform = "rotateY(-180deg)";
      cardFront.style.oTransform = "rotateY(-180deg)";
      cardBack.style.WebkitTransform = "rotateY(0)";
      cardBack.style.mozTransform = "rotateY(0)";
      cardBack.style.msTransform = "rotateY(0)";
      cardBack.style.oTransform = "rotateY(0)";
    });

    card.addEventListener("mouseleave", () => {
      cardBack.style.WebkitTransform = "rotateY(180deg)";
      cardBack.style.mozTransform = "rotateY(180deg)";
      cardBack.style.msTransform = "rotateY(180deg)";
      cardBack.style.oTransform = "rotateY(180deg)";
      cardFront.style.WebkitTransform = "rotateY(0)";
      cardFront.style.mozTransform = "rotateY(0)";
      cardFront.style.msTransform = "rotateY(0)";
      cardFront.style.oTransform = "rotateY(0)";
    });

    portfolioArea.appendChild(card);
  });
}

window.addEventListener("load", generateCards());
// TOUCH CARD ROTATION
// const frontCards = Array.prototype.slice.call(document.getElementsByClassName("card__side--front"))
// const backCards = Array.from(document.getElementsByClassName("card__side--back"))
// const rotateCards = []
// rotateCards.length = frontCards.length

// for (let c = 0; c < frontCards.length; c++) {
//     rotateCards[c].front = frontCards[c]
//     rotateCards[c].back = backCards[c]
// }

// console.log(typeof(frontCards))
// console.log(frontCards)
// console.log(rotateCards)

// let cardCount = 0

// frontCards.forEach(frontCard => {
//     frontCard.addEventListener("touchstart", () => {
//         if (cardCount == 0) {
//         frontCard.style.display = "none";
//         cardCount++
//         } else {
//         frontCard.style.display = "block";
//         cardCount = 0
//         }
//     })
// })

// FILTERING
let filterButton = document.getElementById("filterButton");
let filterWindow = document.getElementById("filterWindow");
let portfolioTitle = document.getElementById("portfolioTitle");
let filterCount = 0;

filterButton.addEventListener("click", () => {
  filterWindow.classList.toggle("filter__window--active");
  if (filterCount === 0) {
    filterButton.innerHTML = "Close";
    filterCount++;
  } else {
    filterButton.innerHTML = "Filters";
    filterCount--;
  }
});

let filterArgument = [];

document.querySelectorAll(".filter__element").forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("filter__element--active");

    if (!filterArgument.includes(element.innerHTML)) {
      filterArgument.push(element.innerHTML);
    } else {
      filterArgument.splice(filterArgument.indexOf(element.innerHTML), 1);
    }
    filteringCards(filterArgument);
  });
});

let filteringByText = "";

function filteringCards(criteria) {
  portfolio = projectsArray.filter((element) => {
    return criteria.every((v) => element.tags.includes(v));
  });
  if (filterArgument.length === 0) {
    portfolio = projectsArray;
    portfolioTitle.innerText = "Portfolio";
  } else {
    if (filterArgument.length > 3) {
      filteringByText = `${filterArgument[0]}, ${filterArgument[1]}, and ${
        filterArgument.length - 2
      }+`;
    } else {
      filteringByText = `${filterArgument[0]}${
        filterArgument[2]
          ? ", " + filterArgument[1] + " and " + filterArgument[2]
          : filterArgument[1]
          ? " and " + filterArgument[1]
          : ""
      }`;
    }
    portfolioTitle.innerHTML = `Portfolio <div class="filtering-by">(filtering by: ${filteringByText}) </div>`;
  }
  generateCards();
  if (!portfolioArea.hasChildNodes()) {
    portfolioArea.innerHTML =
      '<br> <br> <p style="position:absolute; top:2rem; left:1rem">No projects found matching all of the applied filters</p>';
  }
}

// FLOATING IPHONE
const iphoneFloating = document.getElementById("iphoneFloating");
const shadowFloating = document.getElementById("shadowFloating");
const touchArea = document.getElementById("touchArea");
const iphoneDisplay = document.getElementById("iphoneDisplay");
let eventCount = 0;

touchArea.addEventListener("touchstart", () => handleFloating());
touchArea.addEventListener("mouseenter", () => handleFloating());
touchArea.addEventListener("mouseleave", () => handleFloating());

function float() {
  iphoneFloating.classList.remove("change-position");
  shadowFloating.classList.remove("change-position-shadow");
  iphoneFloating.classList.add("change-back");
  shadowFloating.classList.add("change-back-shadow");
  iphoneDisplay.classList.remove("show-display");
  setTimeout(() => {
    iphoneFloating.classList.remove("change-back");
    shadowFloating.classList.remove("change-back-shadow");
    iphoneFloating.classList.add("floating");
    shadowFloating.classList.add("floating-shadow");
  }, 3000);
}

function unfloat() {
  iphoneFloating.classList.remove("change-back");
  shadowFloating.classList.remove("change-back-shadow");
  iphoneFloating.classList.add("change-position");
  shadowFloating.classList.add("change-position-shadow");
  iphoneFloating.classList.remove("floating");
  shadowFloating.classList.remove("floating-shadow");
  iphoneDisplay.classList.add("show-display");
}

function handleFloating() {
  if (eventCount == 0) {
    unfloat();
    iphoneDisplay.style.display = "block";
    iphoneDisplay.classList.add("show-display");
    eventCount++;
  } else if (eventCount == 1) {
    iphoneDisplay.style.display = "none";
    iphoneDisplay.style.opacity = "0";
    iphoneDisplay.classList.remove("show-display");
    float();
    eventCount++;
  } else if (eventCount == 2) {
    unfloat();
    iphoneDisplay.style.display = "block";
    setTimeout(() => {
      iphoneDisplay.style.opacity = "1";
    }, 3000);
    eventCount = 3;
  } else {
    iphoneDisplay.style.opacity = "0";
    iphoneDisplay.style.display = "none";
    float();
    eventCount = 2;
  }
}

document.addEventListener("DOMContentLoaded", float());

// BACKGROUND ANIMATION
let codes = [
  '&lt;section id="homeSection" class="active-section section"&gt; &lt;div class="home"&gt;',
  "&:hover {transform: scale(1.03);    box-shadow: 1px 1px 8px 3px; background-color: color(dark-secondary) ;}",
  'touchArea. addEventListener ("touchstart", () =>',
  ' switchText. innerHTML = "Nothing to see here"; rotateLogo(); deactivate();',
  'dismiss. addEventListener ("click", () => { dataSection. classList. add"dismiss") setTimeout(() =>',
  "let hueR = Math.floor (Math.random() * 255);",
  'function deactivate() {sections. forEach (section => {section.button. classList.add ("unclickable")',
  'const easterEgg = "Why are you even reading this?"',
];

document.addEventListener("DOMContentLoaded", generateBackground());

function generateBackground() {
  let backgroundSquare = document.createElement("div");
  let spawn = Math.floor(Math.random() * 1000) + 500;
  let sizeOrigin = Math.floor(Math.random() * 130) + 35;
  let posXOrigin = Math.floor(Math.random() * 100);
  let posYOrigin = Math.floor(Math.random() * 80) + 10;
  let posDestination = Math.floor(Math.random() * 50);
  let rotation = Math.random() * 720 - 360;
  let duration = Math.floor(Math.random() * 4) + 3;
  let fadeout = duration * 500;
  let eraseDiv = duration * 1000;
  let opacity = (Math.random() * 0.7 + 0.1) * 2;
  let hueR = Math.floor(Math.random() * 255);
  let hueG = Math.floor(Math.random() * 255);
  let hueB = Math.floor(Math.random() * 255);

  backgroundSquare.style.width = `${sizeOrigin}px`;
  backgroundSquare.style.height = `${sizeOrigin}px`;
  backgroundSquare.style.borderRadius = "15px";
  backgroundSquare.style.border = "solid 2px";
  backgroundSquare.style.borderColor = `rgb(${hueR},${hueG},${hueB})`;
  backgroundSquare.style.boxShadow = `0 0 4px 2px rgb(${hueR},${hueG},${hueB})`;
  backgroundSquare.style.opacity = "0";
  backgroundSquare.style.position = "fixed";
  backgroundSquare.style.top = `${posYOrigin}%`;
  backgroundSquare.style.left = `${posXOrigin}%`;
  backgroundSquare.style.zIndex = `-1`;
  backgroundSquare.style.transition = `${duration}s`;
  backgroundSquare.style.transition = `7s`;
  if (portfolioButton.classList.contains("active-item")) {
    let code = codes[Math.floor(Math.random() * codes.length)];
    backgroundSquare.innerHTML = code;
    backgroundSquare.style.fontSize = `${sizeOrigin / 11}px`;
    backgroundSquare.style.fontFamily = `"Fira Sans", sans-serif`;
    backgroundSquare.style.padding = `3px 3px 3px 3px`;
    backgroundSquare.style.color = `rgba(255,255,255,0.3)`;
    backgroundSquare.style.textAlign = `center`;
  }

  container.appendChild(backgroundSquare);
  setTimeout(() => {
    backgroundSquare.style.transform = `translateY(-${posDestination}rem) rotate(${rotation}deg)`;
    backgroundSquare.style.opacity = `${opacity}`;
  }, 200);
  setTimeout(() => {
    backgroundSquare.style.opacity = `0`;
  }, fadeout);
  setTimeout(() => {
    backgroundSquare.remove();
  }, eraseDiv);
  setTimeout(() => {
    generateBackground();
  }, spawn);
}

// Show portfolio tooltip
const portInfoButton = document.getElementById("portInfoButton");
const portInfoText = document.getElementById("portInfoText");

function showTooltip() {
  portInfoButton.classList.toggle("info__button--active");
  portInfoText.classList.toggle("info__text--active");
}

portInfoButton.addEventListener("click", () => showTooltip());
