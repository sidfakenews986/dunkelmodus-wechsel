const toggleButton = document.getElementById('modeToggle');
const currentMode = localStorage.getItem('mode');

if (currentMode) {
    document.body.classList.add(currentMode);
    updateToggleButtonText(currentMode);
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
    updateToggleButtonText(isDark ? 'dark' : 'light');
});

function updateToggleButtonText(mode) {
    toggleButton.innerText = mode === 'dark' ? 'Wechsel zu Hellmodus' : 'Wechsel zu Dunkelmodus';
}