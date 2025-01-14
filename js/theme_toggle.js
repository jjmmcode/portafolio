// Toggle Dark and Light Theme

const themeToggleBtn = document.getElementById('theme-toggle');

// Function to switch themes

function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    // Save the current theme in local storage
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}

// Event Listener for the button

themeToggleBtn.addEventListener('click', toggleTheme);

// Load theme from local storage on page load

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});