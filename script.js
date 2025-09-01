const toggleButton = document.getElementById('modeToggle');
const currentMode = localStorage.getItem('mode');

if (currentMode) {
    document.body.classList.add(currentMode);
    updateToggleButtonText(currentMode);
}

toggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
    updateToggleButtonText(isDark ? 'dark' : 'light');
});

function updateToggleButtonText(mode) {
    toggleButton.innerText = mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}