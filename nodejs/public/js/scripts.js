// Theme toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  if (!toggleButton) return; // Skip if button doesn't exist
  
  const body = document.body;
  const isDark = localStorage.getItem("theme") === "dark";
  
  // Apply theme on page load
  if (isDark) {
    body.classList.add("dark-mode");
    document.documentElement.classList.add('dark');
  }
  
  toggleButton.textContent = isDark ? "☀️" : "🌙";

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    document.documentElement.classList.toggle('dark');
    
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    toggleButton.textContent = isDarkMode ? "☀️" : "🌙";
  });
});

// Voice search
const voiceSearchButton = document.getElementById("voice-search");
if (voiceSearchButton) {
  voiceSearchButton.addEventListener("click", () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = (event) => {
      const query = event.results[0][0].transcript;
      const searchInput = document.querySelector('input[name="search"]');
      searchInput.value = query;
      searchInput.form.submit();
    };
    recognition.onerror = () => {
      alert("Voice search failed. Please try again.");
    };
  });
}
