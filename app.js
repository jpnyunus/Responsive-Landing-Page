document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    updateButtonText();

    themeToggleButton.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      
      if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
      } else {
        document.body.setAttribute('data-theme', 'dark');
      }
      updateButtonText();
    });
  
    function updateButtonText() {
    
      const currentTheme = document.body.getAttribute('data-theme');
      
      if (currentTheme === 'dark') {
        themeToggleButton.innerHTML = '<i class="fa-solid fa-toggle-off fa-xl" style="color: #f2b7c2; cursor: pointer;"></i>';
      } else {
        themeToggleButton.innerHTML = '<i class="fa-solid fa-toggle-on fa-xl" style="cursor: pointer;"></i>';
      }
    }
});