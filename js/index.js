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
    "imgsrc": "img/header-img.png"
  },
  "maincontent": {
    "featuresh4":"Features",
    "featurescontent": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "abouth4":"About",
    "aboutcontent": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "servicesh4":"Services",
    "servicescontent": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "producth4":"Product",
    "productcontent": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "visionh4":"Vision",
    "visioncontent": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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

const ctaImg = document.querySelector('#cta-img');
ctaImg.textContent = siteContent.cta.imgsrc;

const topContent = Array.from(document.querySelectorAll('.text-content'));
topContent[0].querySelector('h4').textContent = siteContent.maincontent.featuresh4;
topContent[0].querySelector('p').textContent = siteContent.maincontent.featurescontent;
topContent[1].querySelector('h4').textContent = siteContent.maincontent.abouth4;
topContent[1].querySelector('p').textContent = siteContent.maincontent.aboutcontent;
topContent[2].querySelector('h4').textContent = siteContent.maincontent.servicesh4;
topContent[2].querySelector('p').textContent = siteContent.maincontent.servicescontent;
topContent[3].querySelector('h4').textContent = siteContent.maincontent.producth4;
topContent[3].querySelector('p').textContent = siteContent.maincontent.productcontent;
topContent[4].querySelector('h4').textContent = siteContent.maincontent.visionh4;
topContent[4].querySelector('p').textContent = siteContent.maincontent.visioncontent;
console.log(topContent[0]);

const contactH4 = document.querySelector('.contact h4');
// console.log(contactH4);
contactH4.textContent = siteContent.contact.contacth4;

const footerParagraph = document.querySelector('footer p')
// console.log(footerParagraph);
footerParagraph.textContent = siteContent.footer.copyright;

