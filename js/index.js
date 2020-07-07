const siteContent = {
  "nav": {
    "nav-item1": "Services",
    "nav-item2": "Product",
    "nav-item3": "Vision",
    "nav-item4": "Features",
    "nav-item5": "About",
    "nav-item6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "imgsrc": "img/header-img.png"
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


const navA = Array.from(document.querySelectorAll('nav a'));
// console.log(navA);
navA[0].textContent = siteContent.nav["nav-item1"];
navA[1].textContent = siteContent.nav["nav-item2"];
navA[2].textContent = siteContent.nav["nav-item3"];
navA[3].textContent = siteContent.nav["nav-item4"];
navA[4].textContent = siteContent.nav["nav-item5"];
navA[5].textContent = siteContent.nav["nav-item6"];


// console.log(nav);

const nav = document.querySelector('nav');


const newA = document.createElement('a');
newA.textContent = 'bruhh';
const newA1 = document.createElement('a');
newA1.textContent = 'rubhh';
nav.appendChild(newA);
nav.prepend(newA1);

const a = document.querySelectorAll('a');

a.forEach(element => {
  element.style.color = 'green'
})



const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent.cta.h1;

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta.button;

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent.cta.imgsrc);
// console.log(ctaImg);

const topContent = Array.from(document.querySelectorAll('.text-content'));
topContent[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
topContent[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];
topContent[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
topContent[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];
topContent[2].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
topContent[2].querySelector('p').textContent = siteContent["main-content"]["services-content"];
topContent[3].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
topContent[3].querySelector('p').textContent = siteContent["main-content"]["product-content"];
topContent[4].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
topContent[4].querySelector('p').textContent = siteContent["main-content"]["vision-content"];
// console.log(topContent[0]);

const middleImg = document.querySelector('#middle-img');

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// console.log(middleImg);

const contactH4 = document.querySelector('.contact h4');
// console.log(contactH4);
contactH4.textContent = siteContent.contact["contact-h4"];

const contactP = Array.from(document.querySelectorAll('.contact p'));
// console.log(contactP);
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

const footerParagraph = document.querySelector('footer p')
// console.log(footerParagraph);
footerParagraph.textContent = siteContent.footer.copyright;

