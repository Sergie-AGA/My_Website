// Cookie policy
// Language data
let english = {
  barTitle: "How cookies are used in this site",
  barDesc: `This site uses cookies and similar technologies to understand how the site is used and improve the user's experience. By clicking "accept cookies", you agree to our policies on how data is handled. For more information, please refer to this site's `,
  barPolicy: "cookie & privacy policy",
  barAccept: "Accept cookies",
  barManage: "Manage preferences",
  c1Title: "Essential cookies",
  c1Desc:
    "These cookies are essential pieces of data to make the site's functionalities operate properly",
  c1Status: "Always ON",
  c2Title: "Analytics cookies",
  c2Desc:
    "These cookies are related to the Google Analytics tool, designed to allow us to understand how many visitors visit this site and how they use it. The process follows ",
  c2Link: "Google's policies.",
  c2StatusOn: "ON",
  c2StatusOff: "OFF",
  policy: "cookie & privacy policy",
  save: "Save",
};
let portuguese = {
  barTitle: "Como cookies são utilizados neste site",
  barDesc: `Este site utiliza cookies e tecnologias similares para entender como o site é utilizado e melhorar a experiência do usuário. Ao clicar em "Aceitar cookies", você concorda com nossa política sobre como os dados são gerenciados. Para mais informações, favor consultar a `,
  barPolicy: "Política de cookies & privacidade.",
  barAccept: "Aceitar cookies",
  barManage: "Gerir preferências",
  c1Title: "Cookies essenciais",
  c1Desc:
    "Estes cookies são pedaços de dados essenciais para fazer as funcionalidades do site operarem adequadamente.",
  c1Status: "Sempre ligados",
  c2Title: "Cookies analíticos",
  c2Desc:
    "Estes cookies estão relacionados a ferramenta Google Analytics, criada para nos permitir quantos visitantes acessam este site e como os usam. O processo segue as ",
  c2Link: "Políticas do Google.",
  c2StatusOn: "SIM",
  c2StatusOff: "NÃO",
  policy: "Política de cookies & privacidade",
  save: "Salvar",
};

let lang = english;
let languageIndex = 0;

let flagUk = document.createElement("img");
flagUk.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_960_720.jpg"
);
flagUk.style.cssText = "width: 2rem; height: auto";

let flagBr = document.createElement("img");
flagBr.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2014/04/02/11/12/brazil-305531_960_720.png"
);
flagBr.style.cssText = "width: 2rem; height: auto";

let langButton = document.createElement("span");
langButton.style.cssText =
  "margin-left: 1rem; cursor: pointer; position: relative";

let flagButton = document.createElement("img");
flagButton.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_960_720.jpg"
);
flagButton.style.cssText = "width: 2rem; height: auto";

let langSwitchArrow = document.createElement("span");
langSwitchArrow.innerHTML = "&#129171;";
langSwitchArrow.style.cssText =
  "font-size: 2.5rem; position: relative; top: 1.2rem; left: 0.4rem;";

let langOptions = document.createElement("div");
langOptions.style.cssText =
  "position: absolute; top: 2rem; left: -1rem; box-shadow: 0 0 4px 3px rgba(0,0,0,0.2); display: flex; justify-content: center; width: 4rem; height: auto; background-color: #ddd; border-radius: 8px;";

langOptions.appendChild(flagUk);
langOptions.appendChild(flagBr);

langButton.appendChild(flagButton);
langButton.appendChild(langSwitchArrow);
langButton.appendChild(langOptions);

function switchLanguage() {
  if (languageIndex === 0) {
    lang = portuguese;
    languageIndex++;
    flagButton = flagBr;
  } else {
    lang = english;
    languageIndex = 0;
    flagButton = flagUk;
  }
}

let langButton2 = langButton;

// Language Button functionality
let isLangOpen = false;
langButton.addEventListener("mouseenter", () => {
  langSwitchArrow.style.color = "#25a3b9";
});
langButton.addEventListener("mouseleave", () => {
  langSwitchArrow.style.color = "black";
});
langButton.addEventListener("click", () => {
  if (!isLangOpen) {
    langOptions.style.display = "flex";
  } else {
    langOptions.style.display = "none";
  }
  isLangOpen = !isLangOpen;
});

// Base notification bar
let cookieBar = document.createElement("div");
cookieBar.style.cssText =
  "background-color:white; width:100%; position: fixed; top: 0; padding: 6px;";

let cookieContainer = document.createElement("div");
cookieContainer.style.cssText = "max-width:1200px;margin:auto;";

cookieBar.appendChild(cookieContainer);

let cookieHeader = document.createElement("h2");
cookieHeader.innerHTML = lang.barTitle;
cookieHeader.style.cssText =
  "color: black; text-align: justify; font-size: 1.5rem;";
cookieHeader.appendChild(langButton);

let cookieText = document.createElement("p");
cookieText.innerHTML = lang.barDesc;
cookieText.style.cssText = "color: black; font-family: 'Fira Sans', sans-serif";
let cookieLink = document.createElement("span");
cookieLink.setAttribute("id", "policyLink");
cookieLink.style.cssText = "color:#25a3b9";
cookieLink.innerHTML = lang.barPolicy;

cookieText.appendChild(cookieLink);

//Buttons
let cookieButtonArea = document.createElement("div");
cookieButtonArea.style.cssText = "display: flex; align-content: center";

let cookieAcceptButton = document.createElement("div");
cookieAcceptButton.innerHTML = lang.barAccept;
cookieAcceptButton.style.cssText =
  "display:inline-block; cursor:pointer; padding: 10px; background-color: #25a3b9; color: white;font-family: Fira-sans, sans-serif; border-radius: 5px;margin: 10px 10px 10px 0;transition:0.3s; font-family: 'Fira Sans', sans-serif";

let cookieManageButton = document.createElement("div");
cookieManageButton.innerHTML = lang.barManage;
cookieManageButton.style.cssText =
  "display:inline-block; cursor:pointer; padding: 10px; font-family: Fira-sans, sans-serif; border-radius: 5px;margin: 10px 10px 10px 0;transition:0.3s; font-family: 'Fira Sans', sans-serif";

cookieButtonArea.appendChild(cookieAcceptButton);
cookieButtonArea.appendChild(cookieManageButton);

//Appending
cookieContainer.appendChild(cookieHeader);
cookieContainer.appendChild(cookieText);
cookieContainer.appendChild(cookieButtonArea);

document.body.appendChild(cookieBar);

let isPreferenceSet = document.cookie.match(
  "(^|;) ?" + "preferenceSet" + "=([^;]*)(;|$)"
);
if (isPreferenceSet) {
  cookieBar.style.display = "none";
}

//Handle policy
let policyLink = document.getElementById("policyLink");

policyLink.style.cursor = "pointer";
policyLink.addEventListener(
  "mouseenter",
  () => (policyLink.style.textDecoration = "underline")
);
policyLink.addEventListener(
  "mouseleave",
  () => (policyLink.style.textDecoration = "none")
);

// Buttons functionalities
// Accept
function dismissCookieElements() {
  cookieBar.style.display = "none";
  cookieMenu.style.display = "none";
  cookieLayer.style.display = "none";
}

cookieAcceptButton.addEventListener("mouseenter", () => {
  cookieAcceptButton.style.backgroundColor = "#186B79";
});
cookieAcceptButton.addEventListener("mouseleave", () => {
  cookieAcceptButton.style.backgroundColor = "#25a3b9";
});
cookieAcceptButton.addEventListener("click", () => {
  dismissCookieElements();
  setPreference();
});

function setPreference() {
  let expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() + 24);

  gaPreference = gAnalytics;
  document.cookie = `preferenceSet=true; expires=${expiryDate}`;
  document.cookie = `gaSet=${gaPreference}; expires=${expiryDate}`;

  // Handle Google Analytics
  if (gAnalytics) {
    let GAScript = document.getElementById("GAScript");

    if (GAScript) {
      GAScript.remove();
    }

    let head = document.getElementsByTagName("head")[0];
    let script = document.createElement("script");
    script.setAttribute("async", "");
    script.setAttribute("id", "GAScript");

    script.src = "https://www.googletagmanager.com/gtag/js?id=G-NKDTEYNGBP";
    head.appendChild(script);

    let ga = document.cookie.match("(^|;) ?" + "_ga" + "=([^;]*)(;|$)");
    if (!ga) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-NKDTEYNGBP");
    }
  } else {
    destroyAnalyticsCookies();
  }
}

function destroyAnalyticsCookies() {
  let GAScript = document.getElementById("GAScript");
  if (GAScript) {
    GAScript.remove();
  }
  document.cookie = "_ga_NKDTEYNGBP= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = "_ga= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = "__utma= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = "__utmb= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = "__utmc= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = "__utmz= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
}

// Manage
cookieManageButton.addEventListener("mouseenter", () => {
  cookieManageButton.style.textDecoration = "underline";
});
cookieManageButton.addEventListener("mouseleave", () => {
  cookieManageButton.style.textDecoration = "none";
});

function showCookieModal() {
  cookieBar.style.display = "none";
  cookieMenu.style.display = "flex";
  cookieLayer.style.display = "block";
}

cookieManageButton.addEventListener("click", () => {
  showCookieModal();
});

// Modal
let cookieMenu = document.createElement("div");
cookieMenu.style.cssText =
  "position:fixed;top: 50%;left:50%;transform:translate(-50%,-50%); width: 90%;max-width: 800px; background-color: #ddd; border-radius: 20px; display: none; z-index: 10; flex-direction: column";

let cookieLayer = document.createElement("div");
cookieLayer.style.cssText =
  "position: fixed; top: 0;width: 100%; height: 100%; background-color: rgba(0,0,0,0.6);display: none; transition: 0.4s; justify-content: center;";

// Necessary Cookies
let cookie1 = document.createElement("div");

cookie1.style.cssText = "padding: 20px; border-bottom: 1px solid black;";

let cookie1Header = document.createElement("div");
cookie1Header.style.cssText =
  "display: flex; justify-content: space-between; margin: 10px 0";

let cookie1Title = document.createElement("h2");
cookie1Title.innerHTML = lang.c1Title;
cookie1Title.style.cssText =
  "color: black; text-align: justify; font-family: 'Fira Sans', sans-serif";

let essentialMessage = document.createElement("p");

essentialMessage.innerHTML = lang.c1Status;
essentialMessage.style.cssText = "color: #25a3b9; right: -0.65rem";

cookie1Header.appendChild(cookie1Title);
cookie1Header.appendChild(essentialMessage);

let cookie1Text = document.createElement("p");
cookie1Text.innerHTML = lang.c1Desc;
cookie1Text.style.cssText =
  "color: black; font-family: 'Fira Sans', sans-serif";

cookie1.appendChild(cookie1Header);
cookie1.appendChild(cookie1Text);

// Analytics cookies
let cookie2 = document.createElement("div");
cookie2.style.cssText = "padding: 20px; border-bottom: 1px solid black;";
let gAnalytics = true;
let gaPreference = gAnalytics;

let cookie2Header = document.createElement("div");
cookie2Header.style.cssText =
  "display: flex; justify-content: space-between; margin: 10px 0";

let cookie2Title = document.createElement("h2");
cookie2Title.innerHTML = lang.c2Title;
cookie2Title.style.cssText =
  "color: black; text-align: justify; font-family: 'Fira Sans', sans-serif";

let analyticsSwitcher = document.createElement("div");
let switcherRound = document.createElement("div");
let analyticsMessage = document.createElement("p");

analyticsSwitcher.style.cssText =
  "border-radius: 15px; width: 3rem; height: 1.5rem; background-color: #25a3b9; position: relative; cursor: pointer";
switcherRound.style.cssText =
  "border-radius: 50%; width: 1.5rem; height: 1.5rem; background-color: white; position: absolute; right: 0; transition: 0.5s; border: 0.5px solid #25a3b9";
analyticsMessage.innerHTML = lang.c2StatusOn;
analyticsMessage.style.cssText = `color: #25a3b9; position: relative; top: -1.5rem; right: -0.65rem;`;

function toggleAnalytics() {
  if (gAnalytics) {
    switcherRound.style.transform = "translateX(-1.5rem)";
    switcherRound.style.borderColor = "#777";
    analyticsSwitcher.style.backgroundColor = "#777";
    analyticsMessage.style.color = "#777";
    analyticsMessage.innerHTML = lang.c2StatusOff;
    gAnalytics = false;
  } else {
    switcherRound.style.transform = "translateX(0)";
    switcherRound.style.borderColor = "#25a3b9";
    analyticsSwitcher.style.backgroundColor = "#25a3b9";
    analyticsMessage.style.color = "#25a3b9";
    analyticsMessage.innerHTML = lang.c2StatusOn;
    gAnalytics = true;
  }
}

analyticsSwitcher.addEventListener("click", () => toggleAnalytics());

analyticsSwitcher.appendChild(switcherRound);
analyticsSwitcher.appendChild(analyticsMessage);

cookie2Header.appendChild(cookie2Title);
cookie2Header.appendChild(analyticsSwitcher);

let cookie2Text = document.createElement("p");
cookie2Text.innerHTML = lang.c2Desc;
cookie2Text.style.cssText =
  "color: black; font-family: 'Fira Sans', sans-serif";

let cookie2Link = document.createElement("a");
cookie2Link.setAttribute("href", "https://policies.google.com/privacy");
cookie2Link.setAttribute("target", "_blank");
cookie2Link.setAttribute("class", "external-link");
cookie2Link.style.cssText = "color: #25a3b9";
cookie2Link.innerHTML = lang.c2Link;

cookie2Text.appendChild(cookie2Link);
cookie2.appendChild(cookie2Header);
cookie2.appendChild(cookie2Text);

// Accepting buttons
let cookie3 = document.createElement("div");
cookie3.style.cssText =
  "padding: 20px; position: relative; width: 100%; display: flex; justify-content: space-between; align-content: center";

let saveChanges = document.createElement("div");
saveChanges.innerHTML = lang.save;
saveChanges.style.cssText =
  "display:inline-block; cursor:pointer; padding: 10px; background-color: #25a3b9; color: white;font-family: Fira-sans, sans-serif; border-radius: 5px;margin: 10px 10px 10px 0;transition:0.3s;font-family: 'Fira Sans', sans-serif";
saveChanges.addEventListener("mouseenter", () => {
  saveChanges.style.backgroundColor = "#186B79";
});
saveChanges.addEventListener("mouseleave", () => {
  saveChanges.style.backgroundColor = "#25a3b9";
});
saveChanges.addEventListener("click", () => {
  dismissCookieElements();
  setPreference();
});

let policyLink2 = document.createElement("div");
policyLink2.innerHTML = lang.policy;
policyLink2.style.cssText =
  "color:#25a3b9; cursor: pointer; display: flex; flex-direction: column; justify-content: center; font-family: 'Fira Sans', sans-serif";
policyLink2.addEventListener("mouseenter", () => {
  policyLink2.style.textDecoration = "underline";
});
policyLink2.addEventListener("mouseleave", () => {
  policyLink2.style.textDecoration = "none";
});
policyLink2.setAttribute("id", "policyLink2");

cookie3.appendChild(policyLink2);
cookie3.appendChild(saveChanges);

cookieMenu.appendChild(cookie1);
cookieMenu.appendChild(cookie2);
cookieMenu.appendChild(cookie3);

document.body.appendChild(cookieMenu);
document.body.appendChild(cookieLayer);

// Section switch for the below code is in the other JS file
policyLink.addEventListener("click", () => altPrivacyButtons());
policyLink2.addEventListener("click", () => {
  altPrivacyButtons();
  runPrivacyNotice();
  cookieMenu.style.display = "none";
  cookieLayer.style.display = "none";
});

let manageButton = document.getElementById("managePreferences");
if (manageButton) {
  manageButton.addEventListener("click", () => {
    showCookieModal();
  });
}

// Read cookie and destroy if no consent on reload (cleans some remaining Google cookies) and sets gAnalytics variable
let v = document.cookie.match("(^|;) ?" + "gaSet" + "=([^;]*)(;|$)");
if (v && v[2] === "false") {
  destroyAnalyticsCookies();
  toggleAnalytics();
}
