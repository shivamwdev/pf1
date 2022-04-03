// variables declaration section 

// ============== header section =============
const documentScreenSize = document.documentElement;
let fullscreenToggle = document.getElementById('fullscreen-toggle');
let toggleDarkMode = document.getElementById('toggle-dark-mode');

// ============== navbar section =============
const navItems = document.getElementsByClassName('nav-items');

// ============== function declaration goes here =============

// ============== Header section =============

// functions for full screen 

/* View in fullscreen */
function openFullscreen() {
    if (documentScreenSize.requestFullscreen) {
        documentScreenSize.requestFullscreen();
    } else if (documentScreenSize.webkitRequestFullscreen) { /* Safari */
        documentScreenSize.webkitRequestFullscreen();
    } else if (documentScreenSize.msRequestFullscreen) { /* IE11 */
        documentScreenSize.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

// for adding event to fullscreen icon in player's section 
fullscreenToggle.addEventListener('click', () => {
    if (fullscreenToggle.classList.contains('fa-expand')) {
        openFullscreen();
    } else {
        closeFullscreen();
    }
});

// adding the event to window to detect when switching between fullscreen and exit fullscreen 
addEventListener("fullscreenchange", () => {
    if (document.fullscreen) {
        fullscreenToggle.classList.remove('fa-expand');
        fullscreenToggle.classList.add('fa-compress');
    } else {
        fullscreenToggle.classList.remove('fa-compress');
        fullscreenToggle.classList.add('fa-expand');
    }
});

// function for dark mode 
toggleDarkMode.addEventListener('click', () => {

    let body = document.getElementsByTagName('body')[0];

    if (toggleDarkMode.classList.contains('fa-moon')) {
        toggleDarkMode.classList.remove('fa-moon');
        toggleDarkMode.classList.add('fa-sun');
        body.classList.add('dark-mode');
    } else {
        toggleDarkMode.classList.remove('fa-sun');
        toggleDarkMode.classList.add('fa-moon');
        body.classList.remove('dark-mode');
    }
});

// ============== navbar section =============

// function for reseting the active links 
function resetActiveLink(num) {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove('nav-item-active');
    }
    navItems[num].classList.add('nav-item-active');
    document.getElementById('nav-slider').style.left = `${num * 17 + 11}%`;
}

navItems[0].addEventListener('click', () => {
    document.getElementById('home-section').scrollIntoView();
    resetActiveLink(0);
});
navItems[1].addEventListener('click', () => {
    document.getElementById('about-section').scrollIntoView();
    resetActiveLink(1);
});
navItems[2].addEventListener('click', () => {
    document.getElementById('skills-section').scrollIntoView();
    resetActiveLink(2);
});
navItems[3].addEventListener('click', () => {
    document.getElementById('projects-section').scrollIntoView();
    resetActiveLink(3);
});
navItems[4].addEventListener('click', () => {
    document.getElementById('contact-section').scrollIntoView();
    resetActiveLink(4);
});

// ======================== home section =========================
let socialLinks = document.querySelectorAll('#social-media-links a');

for (let i = 0; i < 3; i++) {
    socialLinks[i].addEventListener('mouseenter', () => {
        document.querySelectorAll('#social-media-links a::before')[i].style.display = 'block';
        alert(i);
    })
}


// on window load event listener 
addEventListener('load', () => {
    // document.getElementById('contact-section').scrollIntoView();
});

// garbage code 
addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
        setTimeout(() => {
            location.reload();
        }, 1000);
    } else {
        location.reload();
    }
});