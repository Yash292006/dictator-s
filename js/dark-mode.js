document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', currentTheme);
    
    // Update button text based on current theme
    updateButtonText(currentTheme);
    
    darkModeToggle.addEventListener('click', function() {
        // Toggle between 'dark' and 'light'
        const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        
        // Save the preference to localStorage
        localStorage.setItem('theme', newTheme);
        
        // Update button text
        updateButtonText(newTheme);
    });
    
    function updateButtonText(theme) {
        darkModeToggle.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
});