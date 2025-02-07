document.addEventListener("DOMContentLoaded", function () {
    console.log("Settings page loaded.");
  
    // Load saved settings and apply them
    const savedTheme = localStorage.getItem("theme");
    const savedBg = localStorage.getItem("background");
    const savedFontSize = localStorage.getItem("fontSize");
    const savedButtonColor = localStorage.getItem("buttonColor");
    const savedFontFamily = localStorage.getItem("fontFamily");
  
    // Apply saved settings to the UI
    if (savedTheme) {
      document.getElementById("theme").value = savedTheme;
      document.body.classList.add(savedTheme);  // Apply theme to body
      const header = document.querySelector("header");
      if (header) {
        header.classList.add(savedTheme);  // Apply theme to header
      }
      const footer = document.querySelector("footer");
      if (footer) {
        footer.classList.add(savedTheme);  // Apply theme to footer
      }
    }
  
    if (savedBg) {
      document.getElementById("background").value = savedBg;
      document.body.style.backgroundImage = `url(${savedBg})`;
    }
  
    if (savedFontSize) {
      document.getElementById("font-size").value = savedFontSize;
      document.getElementById("font-size-value").textContent = `${savedFontSize}px`;
      document.body.style.fontSize = `${savedFontSize}px`;
    }
  
    if (savedButtonColor) {
      document.getElementById("button-color").value = savedButtonColor;
    }
  
    if (savedFontFamily) {
      document.getElementById("font-family").value = savedFontFamily;
      document.body.style.fontFamily = savedFontFamily;
    }
  
    // Handle font size changes
    document.getElementById("font-size").addEventListener("input", function () {
      const fontSize = document.getElementById("font-size").value;
      document.body.style.fontSize = `${fontSize}px`;
      document.getElementById("font-size-value").textContent = `${fontSize}px`;
    });
  
    // Save settings when the button is clicked
    document.getElementById("save-settings").addEventListener("click", function () {
      const selectedTheme = document.getElementById("theme").value;
      const background = document.getElementById("background").value;
      const fontSize = document.getElementById("font-size").value;
      const buttonColor = document.getElementById("button-color").value;
      const fontFamily = document.getElementById("font-family").value;
  
      // Save to localStorage
      localStorage.setItem("theme", selectedTheme);
      localStorage.setItem("background", background);
      localStorage.setItem("fontSize", fontSize);
      localStorage.setItem("buttonColor", buttonColor);
      localStorage.setItem("fontFamily", fontFamily);
  
      // Apply the changes
      document.body.classList.remove("light-theme", "dark-theme", "hacker-theme");
      document.body.classList.add(selectedTheme);
  
      const header = document.querySelector("header");
      if (header) header.classList.add(selectedTheme);  // Apply to header
  
      const footer = document.querySelector("footer");
      if (footer) footer.classList.add(selectedTheme);  // Apply to footer
  
      document.body.style.backgroundImage = `url(${background})`;
      document.body.style.fontSize = `${fontSize}px`;
      document.body.style.fontFamily = fontFamily;
  
      const buttons = document.querySelectorAll("button");
      buttons.forEach(button => {
        button.style.backgroundColor = buttonColor;
      });
  
      alert("Settings saved!");
    });
  });
  