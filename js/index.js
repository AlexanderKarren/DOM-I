const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Links
document.querySelectorAll("a").forEach(function(element, i) {
  element.textContent = siteContent["nav"][`nav-item-${i+1}`];
});

// CTA Image
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

// CTA Heading and Button
const ctaHeading = document.querySelector(".cta-text").firstElementChild;
ctaHeading.textContent = siteContent["cta"]["h1"];
ctaHeading.nextElementSibling.textContent = siteContent["cta"]["button"];

// Top Content
const topContentContainer = document.querySelector(".top-content");

topContentContainer.firstElementChild.firstElementChild.textContent = siteContent["main-content"]["features-h4"]; // left h4 tag
topContentContainer.firstElementChild.firstElementChild.nextElementSibling.textContent = siteContent["main-content"]["features-content"] // left p

topContentContainer.lastElementChild.firstElementChild.textContent = siteContent["main-content"]["about-h4"]; // right h4 tag
topContentContainer.lastElementChild.firstElementChild.nextElementSibling.textContent = siteContent["main-content"]["about-content"];

// Middle Image
document.getElementById("middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Bottom Content
const bottomContentContainer = document.querySelector(".bottom-content");

bottomContentContainer.firstElementChild.firstElementChild.textContent = siteContent["main-content"]["services-h4"];
bottomContentContainer.firstElementChild.firstElementChild.nextElementSibling.textContent = siteContent["main-content"]["services-content"];

bottomContentContainer.firstElementChild.nextElementSibling.firstElementChild.textContent = siteContent["main-content"]["product-h4"];
bottomContentContainer.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.textContent = siteContent["main-content"]["product-content"];

bottomContentContainer.lastElementChild.firstElementChild.textContent = siteContent["main-content"]["vision-h4"];
bottomContentContainer.lastElementChild.firstElementChild.nextElementSibling.textContent = siteContent["main-content"]["vision-content"];

// Contact Section
const contactSection = document.querySelector(".contact");

contactSection.firstElementChild.textContent = siteContent["contact"]["contact-h4"];
contactSection.firstElementChild.nextElementSibling.textContent = siteContent["contact"]["address"];
contactSection.firstElementChild.nextElementSibling.nextElementSibling.textContent = siteContent["contact"]["phone"];
contactSection.lastElementChild.textContent = siteContent["contact"]["email"];

// Footer
document.querySelector("footer").firstElementChild.textContent = siteContent["footer"]["copyright"];