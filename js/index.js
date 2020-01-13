const siteContent = {
  "nav": {
    "navitem1": "Services",
    "navitem2": "Product",
    "navitem3": "Vision",
    "navitem4": "Features",
    "navitem5": "About",
    "navitem6": "Contact",
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
    "contacth4" : "Contact",
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
navA[0].textContent = siteContent.nav.navitem1;
navA[1].textContent = siteContent.nav.navitem2;
navA[2].textContent = siteContent.nav.navitem3;
navA[3].textContent = siteContent.nav.navitem4;
navA[4].textContent = siteContent.nav.navitem5;
navA[5].textContent = siteContent.nav.navitem6;

const ctaH1 = document.querySelector('.cta-text h1');
ctaH1.textContent = siteContent.cta.h1;

const ctaBtn = document.querySelector('.cta-text button');
ctaBtn.textContent = siteContent.cta.button;

const contactH4 = document.querySelector('.contact h4');
// console.log(contactH4);
contactH4.textContent = siteContent.contact.contacth4;

const footerParagraph = document.querySelector('footer p')
// console.log(footerParagraph);
footerParagraph.textContent = siteContent.footer.copyright;

