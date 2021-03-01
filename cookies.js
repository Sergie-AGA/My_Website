// Cookie policy
// Base notification bar
let cookieBar = document.createElement("div");
cookieBar.style.cssText =
  "background-color:white; width:100%; position: fixed; top: 0; padding: 6px;";

let cookieContainer = document.createElement("div");
cookieContainer.style.cssText = "max-width:1200px;margin:auto;";

cookieBar.appendChild(cookieContainer);

let cookieHeader = document.createElement("h2");
cookieHeader.innerHTML = "How cookies are used in this site";
cookieHeader.style.cssText =
  "color: black; text-align: justify; font-size: 1.5rem;";

let cookieText = document.createElement("p");
cookieText.innerHTML = `This site uses cookies and similar technologies to understand how the site is used and improve the user's experience. By clicking "accept cookies", you agree to our policies on how data is handled. For more information, please refer to this site's <span id="policyLink" style="color:#25a3b9" >cookie & privacy policy</span>.`;
cookieText.style.cssText = "color: black; font-family: 'Fira Sans', sans-serif";

//Buttons
let cookieButtonArea = document.createElement("div");
cookieButtonArea.style.cssText;

let cookieAcceptButton = document.createElement("div");
cookieAcceptButton.innerHTML = "Accept cookies";
cookieAcceptButton.style.cssText =
  "display:inline-block; cursor:pointer; padding: 10px; background-color: #25a3b9; color: white;font-family: Fira-sans, sans-serif; border-radius: 5px;margin: 10px 10px 10px 0;transition:0.3s; font-family: 'Fira Sans', sans-serif";

let cookieManageButton = document.createElement("div");
cookieManageButton.innerHTML = "Manage preferences";
cookieManageButton.style.cssText =
  "display:inline-block; cursor:pointer; padding: 10px; font-family: Fira-sans, sans-serif; border-radius: 5px;margin: 10px 10px 10px 0;transition:0.3s; font-family: 'Fira Sans', sans-serif";

cookieButtonArea.appendChild(cookieAcceptButton);
cookieButtonArea.appendChild(cookieManageButton);

//Appending
cookieContainer.appendChild(cookieHeader);
cookieContainer.appendChild(cookieText);
cookieContainer.appendChild(cookieButtonArea);

document.body.appendChild(cookieBar);

let john = true;
function runPrivacyNotice() {
  if (john) {
    cookieBar.style.display = "block";
  } else {
    cookieBar.style.display = "none";
  }
}

runPrivacyNotice();

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
    ////////////////// verify if exists, if not run this code
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

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-NKDTEYNGBP");
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
cookie1Title.innerHTML = "Essential cookies";
cookie1Title.style.cssText =
  "color: black; text-align: justify; font-family: 'Fira Sans', sans-serif";

let essentialMessage = document.createElement("p");

essentialMessage.innerHTML = "Always ON";
essentialMessage.style.cssText =
  "color: #25a3b9; position: relative; left: -3rem";

cookie1Header.appendChild(cookie1Title);
cookie1Header.appendChild(essentialMessage);

let cookie1Text = document.createElement("p");
cookie1Text.innerHTML =
  "These cookies are essential pieces of data to make the site's functionalities operate properly";
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
cookie2Title.innerHTML = "Analytics cookies";
cookie2Title.style.cssText =
  "color: black; text-align: justify; font-family: 'Fira Sans', sans-serif";

let analyticsSwitcher = document.createElement("div");
let switcherRound = document.createElement("div");
let analyticsMessage = document.createElement("p");

analyticsSwitcher.style.cssText =
  "border-radius: 15px; width: 3rem; height: 1.5rem; background-color: #25a3b9; position: relative; cursor: pointer";
switcherRound.style.cssText =
  "border-radius: 50%; width: 1.5rem; height: 1.5rem; background-color: white; position: absolute; right: 0; transition: 0.5s; border: 0.5px solid #25a3b9";
analyticsMessage.innerHTML = "ON";
analyticsMessage.style.cssText =
  "color: #25a3b9; position: relative; left: -3rem";

function toggleAnalytics() {
  if (gAnalytics) {
    switcherRound.style.transform = "translateX(-1.5rem)";
    switcherRound.style.borderColor = "#777";
    analyticsSwitcher.style.backgroundColor = "#777";
    analyticsMessage.style.color = "#777";
    analyticsMessage.innerHTML = "OFF";
    gAnalytics = false;
  } else {
    switcherRound.style.transform = "translateX(0)";
    switcherRound.style.borderColor = "#25a3b9";
    analyticsSwitcher.style.backgroundColor = "#25a3b9";
    analyticsMessage.style.color = "#25a3b9";
    analyticsMessage.innerHTML = "ON";
    gAnalytics = true;
  }
}

analyticsSwitcher.addEventListener("click", () => toggleAnalytics());

analyticsSwitcher.appendChild(switcherRound);
analyticsSwitcher.appendChild(analyticsMessage);

cookie2Header.appendChild(cookie2Title);
cookie2Header.appendChild(analyticsSwitcher);

let cookie2Text = document.createElement("p");
cookie2Text.innerHTML =
  "These cookies are related to the Google Analytics tool, designed to allow us to understand how many visitors visit this site and how they use it. The process follows <a href='https://policies.google.com/privacy?hl=en-US' style='color:#25a3b9' target='_blank' class='external-link'>Google's policies.</a>";
cookie2Text.style.cssText =
  "color: black; font-family: 'Fira Sans', sans-serif";

cookie2.appendChild(cookie2Header);
cookie2.appendChild(cookie2Text);

// Accepting buttons
let cookie3 = document.createElement("div");
cookie3.style.cssText =
  "padding: 20px; position: relative; width: 100%; display: flex; justify-content: space-between; align-content: center";

let saveChanges = document.createElement("div");
saveChanges.innerHTML = "Save";
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
policyLink2.innerHTML = "cookie & privacy policy";
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
