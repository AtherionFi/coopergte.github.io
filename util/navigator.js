// NAVIGATION MENU DIV
let navdiv = document.createElement('div');
document.body.appendChild(navdiv);
let headdiv = document.createElement('div')

// CSS LOADER
let navstyle = document.createElement('link');
navstyle.setAttribute('rel', 'stylesheet');
navstyle.setAttribute('href', '/util/navigator.css');
navdiv.appendChild(navstyle);
// HTML ELEMENT
let head = document.createElement('h1');
let navHead = document.createElement('p');

headdiv.setAttribute('id', 'headdiv');
navdiv.setAttribute('id', 'navigator');
head.textContent = 'GT:ZE CS-G11';
navHead.textContent = 'Pages Navigator';

navdiv.appendChild(headdiv);
navdiv.appendChild(head);
navdiv.appendChild(navHead);
navdiv.appendChild(document.createElement('br'));

let navhide = document.createElement('button');
navhide.setAttribute('onclick', 'toggleNavbar()');
document.body.appendChild(headdiv);
headdiv.appendChild(navhide);

const width = window.innerWidth;
if (width > 768) {
    navdiv.style.display = "block"
} else {
    navdiv.style.display = "none"
    navdiv.classList.add("hidden")
}

//Pages List
function pageLists() {
    return ['/', 'break', '/katsuro/Profile/', '/katsuro/FAQ/', '/katsuro/My%20Computer/', 'break', '/doc_db/Archlinux/', '/doc_db/schoolhtmltest/','/doc_db/schoolhtmltest2/'];
}
function getPageTexts() {
    return ['Main Page', 'Profile', 'FAQ', 'My Computer','Arch Linux','tugas1', 'pertemuan2']
}
function getBreakTexts() {
    return ['About Me', 'Doc.DB', 'About Him']
}

let directoryPaths = pageLists();

let breakTexts = getBreakTexts();
let pageTexts = getPageTexts();

let breakIndex = 0;
let pageIndex = 0;
let currentPath = window.location.pathname; // Get current path

directoryPaths.forEach(path => {
    if (path == 'break') {
        let breakDiv = document.createElement('div');
        breakDiv.setAttribute('class', 'border-bottom');
        breakDiv.textContent = breakTexts[breakIndex] || '';
        navdiv.appendChild(breakDiv);
        breakIndex++;
    }
    else {
        let link = document.createElement('a');
        link.setAttribute('href', path);
        if (path === currentPath) {
            link.setAttribute('class', 'loaded');
        } else {
            link.setAttribute('class', 'navbutton');
        }
        link.textContent = pageTexts[pageIndex] || '';
        navdiv.appendChild(link);
        navdiv.appendChild(document.createElement('br'));
        pageIndex++;
    }
});
function toggleNavbar() {
    console.log("toggle");
    if (navdiv.style.display === "none") {
        navdiv.style.display = "block";
        setTimeout(() => {
            navdiv.classList.remove("hidden");
        }, 10);
    } 
    else {
        navdiv.classList.add("hidden")
        setTimeout(() => {
            navdiv.style.display = "none"
        }, 500);
    }
}
