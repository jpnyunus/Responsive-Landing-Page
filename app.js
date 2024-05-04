document.addEventListener('DOMContentLoaded', () => {
    // Tema değiştirme düğmesini aliyoruz
    const themeToggleButton = document.getElementById('theme-toggle');
    updateButtonText();  // Buton metnini güncelle
    themeToggleButton.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme'); // Mevcut tema bilgisini al

    // tema dark ise light yap, değilse 'dark' yap
      if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
      } else {
        document.body.setAttribute('data-theme', 'dark');
      }
      updateButtonText();
    });
  
    function updateButtonText() {
    // Mevcut tema bilgisini al
      const currentTheme = document.body.getAttribute('data-theme');
        
      // Tema 'dark' ise toggle off ikonunu göster, değilse toggle on ikonunu göster
      if (currentTheme === 'dark') {
        themeToggleButton.innerHTML = '<i class="fa-solid fa-toggle-off fa-xl" style="color: #f2b7c2; cursor: pointer;"></i>';
      } else {
        themeToggleButton.innerHTML = '<i class="fa-solid fa-toggle-on fa-xl" style="cursor: pointer;"></i>';
      }
    }
});
