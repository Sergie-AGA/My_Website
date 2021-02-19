// Cookie policy
// Base notification bar
let cookieBar = document.createElement("div");
cookieBar.style.cssText =
  "background-color:#ddd; width:100%; position: fixed; top: 0; padding: 6px;";

let cookieContainer = document.createElement("div");
cookieContainer.style.cssText = "max-width:1200px;margin:auto;";

cookieBar.appendChild(cookieContainer);

let cookieHeader = document.createElement("h2");
cookieHeader.innerHTML = "How cookies are used in this site";
cookieHeader.style.cssText =
  "color: black; text-align: justify; font-size: 1.5rem;";

let cookieText = document.createElement("p");
cookieText.innerHTML = `This site uses cookies and similar technologies to understand how the site is used and improve the user's experience. For more information, please refer to this site's <span id="policyLink" style="color:#25a3b9">cookie & privacy policy</span>.`;
cookieText.style.cssText = "color: black;";

//Buttons
let cookieButtonArea = document.createElement("div");
cookieButtonArea.style.cssText;

let cookieManageButton = document.createElement("div");
cookieManageButton.innerHTML = "Manage preferences";
cookieManageButton.style.cssText;

let cookieAcceptButton = document.createElement("div");
cookieAcceptButton.innerHTML = "Accept cookies";
cookieAcceptButton.style.cssText;

cookieButtonArea.appendChild(cookieManageButton);
cookieButtonArea.appendChild(cookieAcceptButton);

//Appending
cookieContainer.appendChild(cookieHeader);
cookieContainer.appendChild(cookieText);
cookieContainer.appendChild(cookieButtonArea);

document.body.appendChild(cookieBar);

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
