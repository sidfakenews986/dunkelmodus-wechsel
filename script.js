const toggleButton = document.getElementById('modeToggle');
const currentMode = localStorage.getItem('mode');

if (currentMode) {
    document.body.classList.add(currentMode);
    toggleButton.innerText = currentMode === 'dark' ? 'Wechsel zu Hellmodus' : 'Wechsel zu Dunkelmodus';
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
    toggleButton.innerText = isDark ? 'Wechsel zu Hellmodus' : 'Wechsel zu Dunkelmodus';
});