// DOM Elements
const themeSelect = document.getElementById('theme');
const savePrefBtn = document.getElementById('savePref');
const animateBtn = document.getElementById('animateBtn');
const bounceBtn = document.getElementById('bounceBtn');
const animBox = document.getElementById('animBox');
const body = document.body;

// Load saved preferences
function loadPreferences() {
    const savedTheme = localStorage.getItem('themePreference');
    if (savedTheme) {
        themeSelect.value = savedTheme;
        applyTheme(savedTheme);
    }
}

// Save preferences to localStorage
function savePreferences() {
    const selectedTheme = themeSelect.value;
    localStorage.setItem('themePreference', selectedTheme);
    applyTheme(selectedTheme);
    
    // Show a confirmation animation
    animBox.classList.add('slide-animation');
    setTimeout(() => {
        animBox.classList.remove('slide-animation');
    }, 2000);
}

// Apply the selected theme
function applyTheme(theme) {
    // Remove all theme classes first
    body.classList.remove('light', 'dark', 'blue');
    // Add the selected theme class
    body.classList.add(theme);
}

// Trigger slide animation
function triggerSlideAnimation() {
    animBox.classList.add('slide-animation');
    setTimeout(() => {
        animBox.classList.remove('slide-animation');
    }, 2000);
}

// Trigger bounce animation
function triggerBounceAnimation() {
    animBox.classList.add('bounce-animation');
    setTimeout(() => {
        animBox.classList.remove('bounce-animation');
    }, 1000);
}

// Event Listeners
savePrefBtn.addEventListener('click', savePreferences);
animateBtn.addEventListener('click', triggerSlideAnimation);
bounceBtn.addEventListener('click', triggerBounceAnimation);

// Initialize
loadPreferences();